import mx from "@mxgraph-app/mx";
import { UpdateCssHandler } from "./UpdateCssHandler";
import { CssColorUpdater } from "./CssColorUpdater";
const { mxConstants, mxClient, mxUtils } = mx;

export class NodeStyleUpdater extends UpdateCssHandler {
  node: any;
  handler: any;

  constructor(handler) {
    super(handler.format, handler.editorUi, handler.container);
    this.handler = handler;
  }

  set updating(val) {
    this.handler.updating = val;
  }

  getRelativeLineHeight(fontSize, css, elt) {
    if (elt.style != null && css != null) {
      var lineHeight: any = css.lineHeight;

      if (
        elt.style.lineHeight != null &&
        elt.style.lineHeight.substring(elt.style.lineHeight.length - 1) == "%"
      ) {
        return parseInt(elt.style.lineHeight) / 100;
      } else {
        return lineHeight.substring(lineHeight.length - 2) == "px"
          ? parseFloat(lineHeight) / fontSize
          : parseInt(lineHeight);
      }
    } else {
      return "";
    }
  }

  getAbsoluteFontSize(css) {
    var fontSize = css != null ? css.fontSize : null;

    if (fontSize != null && fontSize.substring(fontSize.length - 2) == "px") {
      return parseFloat(fontSize);
    } else {
      return mxConstants.DEFAULT_FONTSIZE;
    }
  }

  hasParentOrOnlyChild(name) {
    const { graph, node } = this;
    if (graph.getParentByName(node, name, graph.cellEditor.textarea) != null) {
      return true;
    } else {
      var child = node;

      while (child != null && child.childNodes.length == 1) {
        child = child.childNodes[0];

        if (child.nodeName == name) {
          return true;
        }
      }
    }

    return false;
  }

  isEqualOrPrefixed(str, value) {
    if (str != null && value != null) {
      if (str == value) {
        return true;
      } else if (str.length > value.length + 1) {
        return (
          str.substring(str.length - value.length - 1, str.length) ==
          "-" + value
        );
      }
    }

    return false;
  }

  get css() {
    return mxUtils.getCurrentStyle(this.node);
  }
  get fontSize() {
    return this.getAbsoluteFontSize(this.css);
  }

  get lineHeight(): any {
    const { getRelativeLineHeight, fontSize, css, node } = this;
    return getRelativeLineHeight(fontSize, css, node);
  }

  // Finds common font size
  get elements() {
    return this.node.getElementsByTagName("*");
  }

  get selectedElement() {
    return this.graph.getSelectedElement();
  }

  get textarea() {
    return this.graph.cellEditor.textarea;
  }

  get selection() {
    return window.getSelection();
  }

  update = () => {
    const { selectedElement, textarea } = this;
    var node = selectedElement;

    while (node && node.nodeType != mxConstants.NODETYPE_ELEMENT) {
      node = node.parentNode;
    }

    if (!node) return;

    // Workaround for commonAncestor on range in IE11 returning parent of common ancestor
    if (
      node == textarea &&
      textarea.children.length == 1 &&
      textarea.firstChild.nodeType == mxConstants.NODETYPE_ELEMENT
    ) {
      node = textarea.firstChild;
    }

    this.node = node;

    const {
      elements,
      getAbsoluteFontSize,
      getRelativeLineHeight,
      selection,
    } = this;
    let { fontSize, lineHeight, css } = this;

    // IE does not support containsNode
    if (
      elements.length > 0 &&
      selection &&
      !mxClient.IS_IE &&
      !mxClient.IS_IE11
    ) {
      elements.map((element) => {
        if (selection.containsNode(element, true)) {
          var temp = mxUtils.getCurrentStyle(element);
          fontSize = Math.max(getAbsoluteFontSize(temp), fontSize);
          var lh = getRelativeLineHeight(fontSize, temp, element);

          if (lh != lineHeight || isNaN(Number(lh))) {
            lineHeight = "";
          }
        }
      });
    }

    if (css) {
      const {
        setFontWeight,
        setAlignment,
        setTable,
        setInputs,
        setColor,
      } = this;
      setFontWeight();
      setTable();
      setAlignment();
      setInputs();
      setColor();
    }
    this.updating = false;
  };

  setColor() {
    const {
      currentFontColor,
      currentBgColor,
    } = this.createCssColorUpdater().update();
    this.currentFontColor = currentFontColor;
    this.currentBgColor = currentBgColor;
  }

  setFontWeight() {
    const {
      sup,
      sub,
      css,
      setSelected,
      fontStyleItems,
      hasParentOrOnlyChild,
    } = this;
    setSelected(
      fontStyleItems[0],
      css.fontWeight == "bold" ||
        css.fontWeight > 400 ||
        hasParentOrOnlyChild("B") ||
        hasParentOrOnlyChild("STRONG")
    );
    setSelected(
      fontStyleItems[1],
      css.fontStyle == "italic" ||
        hasParentOrOnlyChild("I") ||
        hasParentOrOnlyChild("EM")
    );
    setSelected(fontStyleItems[2], hasParentOrOnlyChild("U"));
    setSelected(sup, hasParentOrOnlyChild("SUP"));
    setSelected(sub, hasParentOrOnlyChild("SUB"));
  }

  setAlignment() {
    const {
      graph,
      ss,
      setSelected,
      isEqualOrPrefixed,
      full,
      left,
      center,
      right,
      css,
    } = this;
    if (!graph.cellEditor.isTableSelected()) {
      var align =
        graph.cellEditor.align ||
        mxUtils.getValue(
          ss.style,
          mxConstants.STYLE_ALIGN,
          mxConstants.ALIGN_CENTER
        );

      if (isEqualOrPrefixed(css.textAlign, "justify")) {
        setSelected(full, isEqualOrPrefixed(css.textAlign, "justify"));
        setSelected(left, false);
        setSelected(center, false);
        setSelected(right, false);
      } else {
        setSelected(full, false);
        setSelected(left, align == mxConstants.ALIGN_LEFT);
        setSelected(center, align == mxConstants.ALIGN_CENTER);
        setSelected(right, align == mxConstants.ALIGN_RIGHT);
      }
    } else {
      setSelected(full, isEqualOrPrefixed(css.textAlign, "justify"));
      setSelected(left, isEqualOrPrefixed(css.textAlign, "left"));
      setSelected(center, isEqualOrPrefixed(css.textAlign, "center"));
      setSelected(right, isEqualOrPrefixed(css.textAlign, "right"));
    }
  }

  setTable() {
    const { graph, node, currentTable, tableWrapper } = this;
    this.currentTable = graph.getParentByName(
      node,
      "TABLE",
      graph.cellEditor.textarea
    );
    this.tableRow =
      currentTable == null
        ? null
        : graph.getParentByName(node, "TR", currentTable);
    this.tableCell =
      currentTable == null
        ? null
        : graph.getParentByNames(node, ["TD", "TH"], currentTable);
    tableWrapper.style.display = currentTable != null ? "" : "none";
  }

  setInputs() {
    const { setFontSizeInput, setLineHeightInput, input } = this;
    if (document.activeElement != input) {
      setFontSizeInput();
      setLineHeightInput();
    }
  }

  setLineHeightInput() {
    const { lineHeight, lineHeightInput } = this;
    const lh = parseFloat(lineHeight);

    if (!isNaN(lh)) {
      lineHeightInput.value = Math.round(lh * 100) + " %";
    } else {
      lineHeightInput.value = "100 %";
    }
  }

  setFontSizeInput() {
    const { node, pendingFontSize, fontSize, input } = this;
    if (
      node.nodeName == "FONT" &&
      node.getAttribute("size") == "4" &&
      pendingFontSize != null
    ) {
      node.removeAttribute("size");
      node.style.fontSize = pendingFontSize + " pt";
      this.pendingFontSize = null;
    } else {
      input.value = isNaN(fontSize) ? "" : fontSize + " pt";
    }
  }

  createCssColorUpdater() {
    return new CssColorUpdater();
  }
}
