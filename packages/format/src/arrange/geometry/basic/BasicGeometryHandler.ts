import { BaseHandler } from "../BaseHandler";

export class BasicGeometryHandler extends BaseHandler {
  processCells() {
    const { graph, fn, value, cells } = this;
    for (let cell of cells) {
      if (graph.getModel().isVertex(cell)) {
        var geo = graph.getCellGeometry(cell);

        if (geo != null) {
          geo = geo.clone();
          fn(geo, value);

          var state = graph.view.getState(cell);

          if (state != null && graph.isRecursiveVertexResize(state)) {
            graph.resizeChildCells(cell, geo);
          }

          graph.getModel().setGeometry(cell, geo);
          graph.constrainChildCells(cell);
        }
      }
    }
  }
}
