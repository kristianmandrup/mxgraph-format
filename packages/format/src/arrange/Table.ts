import mx from "@mxgraph-app/mx";
import { Buttons } from "../base/Buttons";
const { mxResources, mxUtils } = mx;

export class Table {
  editorUi: any;
  format: any;
  buttons: any;
  panel: any;
  btns: any;
  div: any;

  constructor(editorUi, format) {
    this.editorUi = editorUi;
    this.format = format;
    this.buttons = new Buttons();
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

  get graph() {
    return this.editor.graph;
  }

  styleButtons(elts) {
    this.buttons.style(elts);
  }

  /**
   * TODO: refactor - partition
   */
  add(div) {
    this.div = div;
    const {
      styleDiv,
      createPanel,
      appendSpan,
      addButtons,
      spaceButtons,
    } = this;

    styleDiv();
    appendSpan();
    createPanel();
    addButtons();
    div.appendChild(this.panel);
    spaceButtons();
    return div;
  }

  spaceButtons() {
    this.btns[2].style.marginRight = "9px";
  }

  addButtons() {
    const {
      addDeleteRow,
      addInsertRowBefore,
      addInsertRowAfter,
      addDeleteColumn,
      addInsertColumnAfter,
      addInsertColumnBefore,
    } = this;

    var btns: any[] = [
      addInsertColumnBefore,
      addInsertColumnAfter,
      addDeleteColumn,
      addInsertRowBefore,
      addInsertRowAfter,
      addDeleteRow,
    ];
    this.btns = btns;
    this.styleButtons(btns);
  }

  styleDiv() {
    const { div } = this;
    div.style.paddingTop = "6px";
    div.style.paddingBottom = "10px";
    return div;
  }

  appendSpan() {
    var span = document.createElement("div");
    span.style.marginTop = "2px";
    span.style.marginBottom = "8px";
    span.style.fontWeight = "bold";
    mxUtils.write(span, mxResources.get("table"));
    this.div.appendChild(span);
  }

  createPanel() {
    const panel = document.createElement("div");
    panel.style.position = "relative";
    panel.style.paddingLeft = "0px";
    panel.style.borderWidth = "0px";
    panel.className = "geToolbarContainer";
    this.panel = panel;
    return panel;
  }

  addDeleteRow() {
    const { ui, graph, ss, panel } = this;
    return ui.toolbar.addButton(
      "geSprite-deleterow",
      mxResources.get("deleteRow"),
      () => {
        try {
          graph.deleteTableRow(ss.vertices[0]);
        } catch (e) {
          ui.handleError(e);
        }
      },
      panel
    );
  }

  addInsertRowAfter() {
    const { ui, graph, ss, panel } = this;
    return ui.toolbar.addButton(
      "geSprite-insertrowafter",
      mxResources.get("insertRowAfter"),
      () => {
        try {
          graph.insertTableRow(ss.vertices[0], false);
        } catch (e) {
          ui.handleError(e);
        }
      },
      panel
    );
  }

  addInsertRowBefore() {
    const { ui, graph, ss, panel } = this;
    return ui.toolbar.addButton(
      "geSprite-insertrowbefore",
      mxResources.get("insertRowBefore"),
      () => {
        try {
          graph.insertTableRow(ss.vertices[0], true);
        } catch (e) {
          ui.handleError(e);
        }
      },
      panel
    );
  }

  addInsertColumnAfter() {
    const { ui, graph, ss, panel } = this;
    ui.toolbar.addButton(
      "geSprite-insertcolumnafter",
      mxResources.get("insertColumnAfter"),
      () => {
        try {
          graph.insertTableColumn(ss.vertices[0], false);
        } catch (e) {
          ui.handleError(e);
        }
      },
      panel
    );
  }

  addDeleteColumn() {
    const { ui, graph, ss, panel } = this;
    return ui.toolbar.addButton(
      "geSprite-deletecolumn",
      mxResources.get("deleteColumn"),
      () => {
        try {
          graph.deleteTableColumn(ss.vertices[0]);
        } catch (e) {
          ui.handleError(e);
        }
      },
      panel
    );
  }

  addInsertColumnBefore() {
    const { ui, graph, ss, panel } = this;
    return ui.toolbar.addButton(
      "geSprite-insertcolumnbefore",
      mxResources.get("insertColumnBefore"),
      () => {
        try {
          graph.insertTableColumn(ss.vertices[0], true);
        } catch (e) {
          ui.handleError(e);
        }
      },
      panel
    );
  }
}
