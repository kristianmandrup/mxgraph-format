import { BaseFormatPanel } from "../base";
import mx from "@mxgraph-app/mx";
const { mxResources } = mx;

export class BaseArrangeFormat extends BaseFormatPanel {
  format: any;
  editorUi: any;
  container: any;
  listeners: any[] = [];
  documentMode: any;

  constructor(editorUi, format, container) {
    super(format, editorUi, container);
  }

  get ui() {
    return this.editorUi;
  }

  get ss() {
    return this.format.getSelectionState();
  }

  get editor() {
    return this.editorUi.editor;
  }

  get actions() {
    return this.editor.actions;
  }

  get hasEdges() {
    const { ss } = this;
    return ss.edges.length >= 0;
  }

  get hasVertices() {
    return this.ss.vertices.length > 0;
  }

  resource(name) {
    return mxResources.get(name);
  }

  get graph() {
    return this.editor.graph;
  }
}
