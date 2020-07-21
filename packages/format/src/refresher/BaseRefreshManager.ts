import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../base";
const { mxClient } = mx;

export class BaseRefreshManager extends BaseFormatPanel {
  _div: any;
  _label: any;

  labelIndex: any;
  currentIndex: any;

  get ui() {
    return this.editorUi;
  }

  get graph() {
    return this.ui.editor.graph;
  }

  get div() {
    this._div = this._div || this.createMainContainer();
    return this._div;
  }

  get label() {
    this._label = this._label || this.createLabel();
    return this._label;
  }

  createLabel() {
    var label = document.createElement("div");
    label.className = "geFormatSection";
    label.style.textAlign = "center";
    label.style.fontWeight = "bold";
    label.style.paddingTop = "8px";
    label.style.fontSize = "13px";
    label.style.borderWidth = "0px 0px 1px 1px";
    label.style.borderStyle = "solid";
    label.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
    label.style.height = mxClient.IS_QUIRKS ? "34px" : "25px";
    label.style.overflow = "hidden";
    label.style.width = "100%";
    return label;
  }

  createMainContainer() {
    const div = document.createElement("div");
    div.style.whiteSpace = "nowrap";
    div.style.color = "rgb(112, 112, 112)";
    div.style.textAlign = "left";
    div.style.cursor = "default";
    return div;
  }
}
