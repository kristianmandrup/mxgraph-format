import mx from "@mxgraph-app/mx";
import { BaseArrangeFormat } from "../../BaseArrangeFormat";
const { mxResources, mxUtils } = mx;

export class Distribute extends BaseArrangeFormat {
  /**
   *
   */
  add(div) {
    var ui = this.editorUi;
    var editor = ui.editor;
    var graph = editor.graph;
    div.style.paddingTop = "6px";
    div.style.paddingBottom = "12px";

    div.appendChild(this.createTitle(mxResources.get("distribute")));

    var btn = mxUtils.button(mxResources.get("horizontal"), (_evt) => {
      graph.distributeCells(true);
    });

    btn.setAttribute("title", mxResources.get("horizontal"));
    btn.style.width = "100px";
    btn.style.marginRight = "2px";
    div.appendChild(btn);

    var btn = mxUtils.button(mxResources.get("vertical"), (_evt) => {
      graph.distributeCells(false);
    });

    btn.setAttribute("title", mxResources.get("vertical"));
    btn.style.width = "100px";
    div.appendChild(btn);

    return div;
  }
}
