import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../../base";
const { mxConstants, mxResources } = mx;

export class BackgroundPanel extends BaseFormatPanel {
  currentBgColor: any;
  bgColorApply: any;
  bgPanel: any;

  get isContentEditing() {
    return this.graph.cellEditor.isContentEditing();
  }

  create() {
    const { createPanel, stylePanel } = this;
    createPanel();
    stylePanel();
    return this.bgPanel;
  }

  createPanel() {
    const {
      isContentEditing,
      editingCellColorOption,
      nonEditingCellColorOption,
    } = this;

    const bgPanel = isContentEditing()
      ? editingCellColorOption()
      : nonEditingCellColorOption();
    this.bgPanel = bgPanel;
    return bgPanel;
  }

  stylePanel() {
    this.bgPanel.style.fontWeight = "bold";
  }

  editingCellColorOption() {
    const { currentBgColor } = this;
    return this.createColorOption(
      mxResources.get("backgroundColor"),
      () => {
        return currentBgColor;
      },
      (color) => {
        document.execCommand(
          "backcolor",
          false,
          color != mxConstants.NONE ? color : "transparent"
        );
      },
      "#ffffff",
      {
        install: (apply) => {
          this.bgColorApply = apply;
        },
        destroy: () => {
          this.bgColorApply = null;
        },
      },
      null,
      true
    );
  }

  nonEditingCellColorOption() {
    const { graph } = this;
    return this.createCellColorOption(
      mxResources.get("backgroundColor"),
      mxConstants.STYLE_LABEL_BACKGROUNDCOLOR,
      "#ffffff",
      null,
      function (_color) {
        graph.updateLabelElements(graph.getSelectionCells(), function (elt) {
          elt.style.backgroundColor = null;
        });
      }
    );
  }
}
