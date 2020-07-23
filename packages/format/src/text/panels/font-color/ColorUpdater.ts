import { BaseFormatPanel } from "packages/format/src/base";
import mx from "@mxgraph-app/mx";
const { mxConstants, mxClient } = mx;

export class ColorUpdater extends BaseFormatPanel {
  update = (color) => {
    const { onFireFox, onNormal } = this;
    onFireFox(color) || onNormal(color);
  };

  onNormal = (color) => {
    if (mxClient.IS_FF) return;
    this.executeCommand(color);
    return true;
  };

  executeCommand(color) {
    document.execCommand(
      "forecolor",
      false,
      color != mxConstants.NONE ? color : "transparent"
    );
  }

  get fontElements() {
    return this.cellEditor.textarea.getElementsByTagName("font");
  }

  isDifferent(newFont, oldFont) {
    return (
      newFont != oldFont.node ||
      (newFont == oldFont.node &&
        newFont.getAttribute("color") != oldFont.color)
    );
  }

  cloneFontElements() {
    const oldFonts: any[] = [];
    this.fontElements.map((node) => {
      const color = node.getAttribute("color");
      oldFonts.push({
        node,
        color,
      });
    });
    return oldFonts;
  }

  onFireFox(color) {
    if (!mxClient.IS_FF) return;
    const { cloneFontElements } = this;

    // Workaround for Firefox that adds the font element around
    // anchor elements which ignore inherited colors is to move
    // the font element inside anchor elements
    const oldFonts = cloneFontElements();
    this.executeCommand(color);

    // Finds the new or changed font element
    const newFonts = this.fontElements;
    for (let i = 0; i < newFonts.length; i++) {
      const { isDifferent, processFont } = this;
      const newFont = newFonts[i];
      const oldFont = oldFonts[i];

      if (i >= oldFonts.length || isDifferent(newFont, oldFont)) {
        processFont(newFont);
        break;
      }
    }
    return true;
  }

  isAnchor(child) {
    return (
      child != null &&
      child.nodeName == "A" &&
      child.nextSibling == null &&
      child.firstChild != null
    );
  }

  processFont(newFont) {
    const { isAnchor, appendFontElem } = this;
    const child = newFont.firstChild;

    // Moves the font element to inside the anchor element and adopts all children
    if (!isAnchor(child)) return;
    appendFontElem(child, newFont);
  }

  appendFontElem(child, newFont) {
    var parent = newFont.parentNode;
    parent.insertBefore(child, newFont);
    var tmp = child.firstChild;

    while (tmp != null) {
      var next = tmp.nextSibling;
      newFont.appendChild(tmp);
      tmp = next;
    }

    child.appendChild(newFont);
  }
}
