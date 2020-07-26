import { EdgeGeometryManager } from "./edge";
import { BasicGeometryManager } from "./basic";
import { GeometryHandler } from "./GeometryHandler";

export class GeometryManager extends GeometryHandler {
  edgeGeometryManager: any;
  basicGeometryManager: any;

  constructor(editorUi: any, format: any, container) {
    super(editorUi, format, container);
    this.edgeGeometryManager = this.createEdgeGeometryManager();
    this.basicGeometryManager = this.createBasicGeometryManager();
  }

  createEdgeGeometryManager() {
    return new EdgeGeometryManager(this.editorUi, this.format, this.container);
  }

  createBasicGeometryManager() {
    return new BasicGeometryManager(this.editorUi, this.format, this.container);
  }

  addGeometry(container) {
    this.basicGeometryManager.addGeometry(container);
  }

  addEdgeGeometry(container) {
    this.edgeGeometryManager.addEdgeGeometry(container);
  }
}
