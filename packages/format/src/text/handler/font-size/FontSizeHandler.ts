import mx from "@mxgraph-app/mx";
const { mxConstants, mxClient, mxUtils } = mx;

export class FontSizeHandler {
  handler: any;
  fontSize: any;

  constructor(handler, fontSize) {
    this.handler = handler;
    this.fontSize = fontSize;
  }

  get graph() {
    return this.handler.graph;
  }

  get textarea() {
    return this.graph.cellEditor.textarea;
  }

  get selection(): any {
    return window.getSelection();
  }

  set pendingFontSize(val) {
    this.handler.pendingFontSize = val;
  }

  get container() {
    const { selection, graph } = this;
    return selection.rangeCount > 0
      ? selection.getRangeAt(0).commonAncestorContainer
      : graph.cellEditor.textarea;
  }

  textAreaContains(elem, ignoreContains = false) {
    const { selection, textarea } = this;
    return (
      textarea != null &&
      elem != textarea &&
      textarea.contains(elem) &&
      (ignoreContains || selection.containsNode(elem, true))
    );
  }

  updateSize(elem, ignoreContains = false) {
    let { textAreaContains, setFontElem, setFontStyle } = this;
    if (!textAreaContains(elem, ignoreContains)) return;
    setFontElem(elem) || setFontStyle(elem);
  } // Wraps text node or mixed selection with leading text in a font element

  setFontElem(elem) {
    const { fontSize } = this;
    if (elem.nodeName !== "FONT") return;
    elem.removeAttribute("size");
    elem.style.fontSize = fontSize + "px";
    return true;
  }

  isDiffFontSize(elem) {
    const { fontSize } = this;
    return mxUtils.getCurrentStyle(elem.parentNode).fontSize != fontSize + "px";
  }

  cssFor(elem) {
    return mxUtils.getCurrentStyle(elem);
  }

  setFontStyle(elem) {
    const { setNewFontSize, cssFor, fontSize } = this;
    const css = cssFor(elem);
    if (css.fontSize == fontSize + "px") return;
    setNewFontSize(elem);
  }

  calcNewFontSize(elem) {
    const { isDiffFontSize, fontSize } = this;
    return isDiffFontSize(elem) ? fontSize + "px" : "";
  }

  setNewFontSize(elem) {
    const { calcNewFontSize } = this;
    const newFontSize = calcNewFontSize(elem);
    elem.style.fontSize = newFontSize;
  }

  handle() {
    const { fontSize } = this;
    let { selection, container } = this;
    const { graph, input } = this.handler;
    const { updateSize } = this;
    // IE does not support containsNode
    // KNOWN: Fixes font size issues but bypasses undo
    if (selection && !mxClient.IS_IE && !mxClient.IS_IE11) {
      if (
        container == graph.cellEditor.textarea ||
        container.nodeType != mxConstants.NODETYPE_ELEMENT
      ) {
        document.execCommand("fontSize", false, "1");
      }

      if (container != graph.cellEditor.textarea) {
        container = container.parentNode;
      }

      if (
        container != null &&
        container.nodeType == mxConstants.NODETYPE_ELEMENT
      ) {
        var elts = container.getElementsByTagName("*");
        updateSize(container);

        for (var i = 0; i < elts.length; i++) {
          updateSize(elts[i]);
        }
      }

      input.value = fontSize + " pt";
    } else if (window.getSelection || selection) {
      // Checks selection
      var par = null;

      if (selection) {
        par = selection.createRange().parentElement();
      } else {
        selection = this.selection;

        if (selection.rangeCount > 0) {
          par = selection.getRangeAt(0).commonAncestorContainer;
        }
      }

      // Node.contains does not work for text nodes in IE11
      function isOrContains(container, node) {
        while (node != null) {
          if (node === container) {
            return true;
          }

          node = node.parentNode;
        }

        return false;
      }

      if (par && isOrContains(graph.cellEditor.textarea, par)) {
        this.pendingFontSize = fontSize;

        // Workaround for can't set font size in px is to change font size afterwards
        document.execCommand("fontSize", false, "4");
        var elts = graph.cellEditor.textarea.getElementsByTagName("font");

        for (var i = 0; i < elts.length; i++) {
          if (elts[i].getAttribute("size") == "4") {
            elts[i].removeAttribute("size");
            elts[i].style.fontSize = this.pendingFontSize + "px";

            // Overrides fontSize in input with the one just assigned as a workaround
            // for potential fontSize values of parent elements that don't match
            window.setTimeout(() => {
              input.value = this.pendingFontSize + " pt";
              this.pendingFontSize = null;
            }, 0);

            break;
          }
        }
      }
    }
  }
}
