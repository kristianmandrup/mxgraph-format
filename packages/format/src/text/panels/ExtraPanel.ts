import mx from "../handler/style/node_modules/@mxgraph-app/mx";
import { BaseFormatPanel } from "../../base";
const { mxConstants, mxResources } = mx;

export class ExtraPanel extends BaseFormatPanel {
  extraPanel: any;
  wwOpt: any;
  htmlOpt: any;

  create() {
    const { createExtraPanel, appendHtmlOpt, appendWwOpt } = this;

    createExtraPanel();
    appendWwOpt();
    appendHtmlOpt();
    // Delegates switch of style to formattedText action as it also convertes newlines
    return this.extraPanel;
  }

  createExtraPanel() {
    var extraPanel = this.createPanel();
    extraPanel.style.paddingTop = "2px";
    extraPanel.style.paddingBottom = "4px";
    this.extraPanel = extraPanel;
    return extraPanel;
  }

  appendWwOpt() {
    const { extraPanel, ss } = this;
    // LATER: Fix toggle using '' instead of 'null'
    var wwOpt = this.createCellOption(
      mxResources.get("wordWrap"),
      mxConstants.STYLE_WHITE_SPACE,
      null,
      "wrap",
      "null",
      null,
      null,
      true
    );
    wwOpt.style.fontWeight = "bold";
    this.wwOpt = wwOpt;

    // Word wrap in edge labels only supported via labelWidth style
    if (!ss.containsLabel && !ss.autoSize && ss.edges.length == 0) {
      extraPanel.appendChild(wwOpt);
    }
    return wwOpt;
  }

  appendHtmlOpt() {
    const { ui, extraPanel } = this;
    var htmlOpt = this.createCellOption(
      mxResources.get("formattedText"),
      "html",
      "0",
      null,
      null,
      null,
      ui.actions.get("formattedText")
    );
    htmlOpt.style.fontWeight = "bold";
    this.htmlOpt = htmlOpt;
    extraPanel.appendChild(htmlOpt);
    return htmlOpt;
  }
}
