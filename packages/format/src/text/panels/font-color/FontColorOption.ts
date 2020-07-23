import mx from "@mxgraph-app/mx";
import { FontColorPanel } from "./FontColorPanel";
const { mxConstants } = mx;

export class FontColorOption extends FontColorPanel {
  initialColor = "#000000";

  resetPanels = (color) => {
    const { bgPanel, borderPanel } = this;
    if (color == null || color == mxConstants.NONE) {
      bgPanel.style.display = "none";
    } else {
      bgPanel.style.display = "";
    }

    borderPanel.style.display = bgPanel.style.display;
  };

  setCellStyles(value: any = null) {
    const { graph } = this;
    graph.setCellStyles(
      mxConstants.STYLE_NOLABEL,
      value,
      graph.getSelectionCells()
    );
  }

  resetSelectedCells = (color) => {
    const { graph, setCellStyles, resetElementColor } = this;
    if (color == null || color == mxConstants.NONE) {
      setCellStyles("1");
    } else {
      setCellStyles(null);
    }

    graph.updateLabelElements(graph.getSelectionCells(), resetElementColor);
  };

  resetElementColor = (elem) => {
    elem.removeAttribute("color");
    elem.style.color = null;
  };

  get fontColorOption() {
    const { resetPanels, resetSelectedCells, resource, initialColor } = this;
    return this.createCellColorOption(
      resource("fontColor"),
      mxConstants.STYLE_FONTCOLOR,
      initialColor,
      resetPanels,
      resetSelectedCells
    );
  }
}
