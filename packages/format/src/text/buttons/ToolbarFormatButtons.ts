import { Buttons1 } from "./Buttons1";
import { Buttons2 } from "./Buttons2";
import { Buttons3 } from "./Buttons3";
import { Buttons4 } from "./Buttons4";

export class ToolbarFormatButtons {
  editorUi: any;

  insertPanel: any;
  styleButtons: any;
  currentTable: any;
  tableCell: any;
  tablePanel: any;
  tablePanel2: any;
  tableRow: any;
  tmp: any;

  constructor(editorUi: any) {
    this.editorUi = editorUi;
  }

  get graph() {
    return this.editorUi.graph;
  }

  get toolbar(): any {
    return this.editorUi.toolbar;
  }

  addAll() {
    this.addBtns();
    this.addBtns1();
    this.addBtns2();
    this.addBtns3();
    return this;
  }

  addBtns() {
    const { insertPanel, toolbar } = this;
    var insertBtns = toolbar.addItems(["link", "image"], insertPanel, true);
    this.styleButtons(insertBtns);
    return this;
  }

  addBtns1() {
    new Buttons1(this.editorUi).add();
    return this;
  }

  addBtns2() {
    new Buttons2(this.editorUi).add();
    return this;
  }

  addBtns3() {
    new Buttons3(this.editorUi).add();
    return this;
  }

  addBtns4() {
    new Buttons4(this.editorUi).add();
    return this;
  }
}
