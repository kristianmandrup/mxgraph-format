import mx from "@mxgraph-app/mx";
import { BaseArrangeFormat } from "../../BaseArrangeFormat";
const { mxConstants, mxResources, mxUtils } = mx;

export class Flip extends BaseArrangeFormat {
  /**
   *
   */
  add(div) {
    var ui = this.editorUi;
    var editor = ui.editor;
    var graph = editor.graph;
    div.style.paddingTop = "6px";
    div.style.paddingBottom = "10px";

    var span = document.createElement("div");
    span.style.marginTop = "2px";
    span.style.marginBottom = "8px";
    span.style.fontWeight = "bold";
    mxUtils.write(span, mxResources.get("flip"));
    div.appendChild(span);

    var btn = mxUtils.button(mxResources.get("horizontal"), (_evt) => {
      graph.toggleCellStyles(mxConstants.STYLE_FLIPH, false);
    });

    btn.setAttribute("title", mxResources.get("horizontal"));
    btn.style.width = "100px";
    btn.style.marginRight = "2px";
    div.appendChild(btn);

    var btn = mxUtils.button(mxResources.get("vertical"), (_evt) => {
      graph.toggleCellStyles(mxConstants.STYLE_FLIPV, false);
    });

    btn.setAttribute("title", mxResources.get("vertical"));
    btn.style.width = "100px";
    div.appendChild(btn);

    return div;
  }
}
