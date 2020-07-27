import { BaseHandler } from "../BaseHandler";

export class EdgeGeometryHandler extends BaseHandler {
  processCells() {
    const { graph, fn, value, cells } = this;
    for (let cell of cells) {
      if (graph.getModel().isEdge(cell)) {
        var geo = graph.getCellGeometry(cell);

        if (geo != null) {
          geo = geo.clone();
          fn(geo, value);

          graph.getModel().setGeometry(cell, geo);
        }
      }
    }
  }
}
