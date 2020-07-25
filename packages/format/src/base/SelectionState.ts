import { Base } from "./Base";
import mx from "@mxgraph-app/mx";
const { mxConstants, mxUtils } = mx;

export class SelectionState extends Base {
  get cells() {
    return this.graph.getSelectionCells();
  }
  /**
   * Adds the given color option.
   */
  getState() {
    const { graph, cells } = this;
    var shape = null;

    for (let cell of cells) {
      var state = graph.view.getState(cell);

      if (state != null) {
        var tmp = mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null);

        if (!tmp) return;
        if (shape == null) {
          shape = tmp;
        } else if (shape != tmp) {
          return null;
        }
      }
    }
    return shape;
  }
}
