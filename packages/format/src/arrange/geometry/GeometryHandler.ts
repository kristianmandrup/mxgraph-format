import { BasicGeometryHandler } from "./basic";
import { EdgeGeometryHandler } from "./edge";
import { BaseFormatPanel } from "../../base";

export class GeometryHandler extends BaseFormatPanel {
  basicGeometryHandler: any;
  edgeGeometryHandler: any;

  constructor(editorUi: any, format: any, container: any) {
    super(editorUi, format, container);
    this.basicGeometryHandler = this.createBasicGeometryHandler();
    this.edgeGeometryHandler = this.createEdgeGeometryHandler();
  }

  createBasicGeometryHandler() {
    return new BasicGeometryHandler(this.editorUi, this.format, this.container);
  }

  createEdgeGeometryHandler() {
    return new EdgeGeometryHandler(this.editorUi, this.format, this.container);
  }

  addGeometryHandler(input, fn) {
    this.basicGeometryHandler.addGeometryHandler(input, fn);
  }

  addEdgeGeometryHandler(input, fn) {
    this.edgeGeometryHandler.addEdgeGeometryHandler(input, fn);
  }
}
