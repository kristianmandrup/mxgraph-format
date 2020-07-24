import { BaseFormatHandler } from "../BaseFormatHandler";
import mx from "@mxgraph-app/mx";
import { NodeStyleUpdater } from "./NodeStyleUpdater";
const { mxEvent, mxClient } = mx;

export class UpdateCssHandler extends BaseFormatHandler {
  setSelected: any;
  fontStyleItems: any;
  sup: any;
  sub: any;

  full: any;
  left: any;
  center: any;
  right: any;

  currentTable: any;
  tableRow: any;
  tableCell: any;
  tableWrapper: any;
  pendingFontSize: any;
  input: any;
  lineHeightInput: any;
  fontMenu: any;
  currentFontColor: any;
  fontColorApply: any;
  currentBgColor: any;
  bgColorApply: any;

  create() {
    const { graph } = this;
    if (graph.cellEditor.isContentEditing()) {
      const { updateCssHandler } = this;
      if (
        mxClient.IS_FF ||
        mxClient.IS_EDGE ||
        mxClient.IS_IE ||
        mxClient.IS_IE11
      ) {
        mxEvent.addListener(
          graph.cellEditor.textarea,
          "DOMSubtreeModified",
          updateCssHandler
        );
      }

      mxEvent.addListener(graph.cellEditor.textarea, "input", updateCssHandler);
      mxEvent.addListener(
        graph.cellEditor.textarea,
        "touchend",
        updateCssHandler
      );
      mxEvent.addListener(
        graph.cellEditor.textarea,
        "mouseup",
        updateCssHandler
      );
      mxEvent.addListener(graph.cellEditor.textarea, "keyup", updateCssHandler);
      this.listeners.push({
        destroy: function () {
          // No need to remove listener since textarea is destroyed after edit
        },
      });
      this.updateCssHandler();
    }
  }

  // TODO: REFACTOR
  updateCssHandler = () => {
    var updating = false;
    if (updating) return;
    updating = true;

    window.setTimeout(this.updateNodeStyle, 0);
  };

  updateNodeStyle() {
    return new NodeStyleUpdater(this).update();
  }
}
