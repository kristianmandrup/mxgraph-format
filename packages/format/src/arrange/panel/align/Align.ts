import mx from "../../../text/handler/style/node_modules/@mxgraph-app/mx";
import { BaseFormatPanel } from "../../../base";
const { mxClient, mxConstants, mxResources } = mx;

export class Align extends BaseFormatPanel {
  div: any;
  stylePanel: any;

  buttons: any = {};

  styleDiv() {
    const { div } = this;
    div.style.paddingTop = "6px";
    div.style.paddingBottom = "12px";
    if (mxClient.IS_QUIRKS) {
      div.style.height = "60px";
    }
  }

  appendTitle() {
    const { div } = this;
    div.appendChild(this.createTitle(mxResources.get("align")));
  }

  createStylePanel() {
    const stylePanel = document.createElement("div");
    stylePanel.style.position = "relative";
    stylePanel.style.paddingLeft = "0px";
    stylePanel.style.borderWidth = "0px";
    stylePanel.className = "geToolbarContainer";
    this.stylePanel = stylePanel;
    return stylePanel;
  }

  addButtons() {
    const { addLeftBtn } = this;
    addLeftBtn();
  }

  addLeftBtn() {
    const { buttons, stylePanel, graph } = this;
    buttons.left = this.editorUi.toolbar.addButton(
      "geSprite-alignleft",
      mxResources.get("left"),
      function () {
        graph.alignCells(mxConstants.ALIGN_LEFT);
      },
      stylePanel
    );
  }

  addCenterBtn() {
    const { buttons, stylePanel, graph } = this;

    buttons.center = this.editorUi.toolbar.addButton(
      "geSprite-aligncenter",
      mxResources.get("center"),
      function () {
        graph.alignCells(mxConstants.ALIGN_CENTER);
      },
      stylePanel
    );
  }

  addRightBtn() {
    const { buttons, stylePanel, graph } = this;

    buttons.right = this.editorUi.toolbar.addButton(
      "geSprite-alignright",
      mxResources.get("right"),
      function () {
        graph.alignCells(mxConstants.ALIGN_RIGHT);
      },
      stylePanel
    );
  }

  addTopBtn() {
    const { buttons, stylePanel, graph } = this;

    buttons.top = this.editorUi.toolbar.addButton(
      "geSprite-aligntop",
      mxResources.get("top"),
      function () {
        graph.alignCells(mxConstants.ALIGN_TOP);
      },
      stylePanel
    );
  }

  addMiddleBtn() {
    const { buttons, stylePanel, graph } = this;

    buttons.middle = this.editorUi.toolbar.addButton(
      "geSprite-alignmiddle",
      mxResources.get("middle"),
      function () {
        graph.alignCells(mxConstants.ALIGN_MIDDLE);
      },
      stylePanel
    );
  }

  addBottomBtn() {
    const { buttons, stylePanel, graph } = this;

    buttons.bottom = this.editorUi.toolbar.addButton(
      "geSprite-alignbottom",
      mxResources.get("bottom"),
      function () {
        graph.alignCells(mxConstants.ALIGN_BOTTOM);
      },
      stylePanel
    );
  }

  addStyleButtons() {
    const { addButtons } = this;
    addButtons();

    const { left, center, right, top, middle, bottom } = this.buttons;
    this.styleButtons([left, center, right, top, middle, bottom]);
    right.style.marginRight = "6px";
  }

  appendStylePanel() {
    this.createStylePanel();
    this.div.appendChild(this.stylePanel);
  }

  /**
   * add alignment to div
   */
  add(div) {
    const { addStyleButtons, styleDiv, appendTitle, appendStylePanel } = this;
    styleDiv();
    appendTitle();
    addStyleButtons();
    appendStylePanel();

    return div;
  }
}
