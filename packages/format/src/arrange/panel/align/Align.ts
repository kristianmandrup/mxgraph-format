import mx from "@mxgraph-app/mx";
import { BaseArrangeFormat } from "../../BaseArrangeFormat";
const { mxClient, mxConstants, mxResources } = mx;

export class Align extends BaseArrangeFormat {
  /**
   * add alignment to div
   */
  add(div) {
    var graph = this.editorUi.editor.graph;
    div.style.paddingTop = "6px";
    div.style.paddingBottom = "12px";
    div.appendChild(this.createTitle(mxResources.get("align")));

    var stylePanel = document.createElement("div");
    stylePanel.style.position = "relative";
    stylePanel.style.paddingLeft = "0px";
    stylePanel.style.borderWidth = "0px";
    stylePanel.className = "geToolbarContainer";

    if (mxClient.IS_QUIRKS) {
      div.style.height = "60px";
    }

    var left = this.editorUi.toolbar.addButton(
      "geSprite-alignleft",
      mxResources.get("left"),
      function () {
        graph.alignCells(mxConstants.ALIGN_LEFT);
      },
      stylePanel
    );
    var center = this.editorUi.toolbar.addButton(
      "geSprite-aligncenter",
      mxResources.get("center"),
      function () {
        graph.alignCells(mxConstants.ALIGN_CENTER);
      },
      stylePanel
    );
    var right = this.editorUi.toolbar.addButton(
      "geSprite-alignright",
      mxResources.get("right"),
      function () {
        graph.alignCells(mxConstants.ALIGN_RIGHT);
      },
      stylePanel
    );

    var top = this.editorUi.toolbar.addButton(
      "geSprite-aligntop",
      mxResources.get("top"),
      function () {
        graph.alignCells(mxConstants.ALIGN_TOP);
      },
      stylePanel
    );
    var middle = this.editorUi.toolbar.addButton(
      "geSprite-alignmiddle",
      mxResources.get("middle"),
      function () {
        graph.alignCells(mxConstants.ALIGN_MIDDLE);
      },
      stylePanel
    );
    var bottom = this.editorUi.toolbar.addButton(
      "geSprite-alignbottom",
      mxResources.get("bottom"),
      function () {
        graph.alignCells(mxConstants.ALIGN_BOTTOM);
      },
      stylePanel
    );

    this.styleButtons([left, center, right, top, middle, bottom]);
    right.style.marginRight = "6px";
    div.appendChild(stylePanel);

    return div;
  }
}
