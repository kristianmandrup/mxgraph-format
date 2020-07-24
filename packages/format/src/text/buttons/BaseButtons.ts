export class BaseButtons {
  editorUi: any;
  insertPanel: any;
  styleButtons: any;

  constructor(editorUi: any) {
    this.editorUi = editorUi;
  }

  get graph() {
    return this.editorUi.graph;
  }

  get toolbar(): any {
    return this.editorUi.toolbar;
  }
}
