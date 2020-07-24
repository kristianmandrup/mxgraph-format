import mx from "@mxgraph-app/mx";
const { mxResources } = mx;
import { BaseButtons } from "./BaseButtons";

export class Buttons2 extends BaseButtons {
  currentTable: any;
  tableCell: any;
  tablePanel: any;
  tablePanel2: any;
  tableRow: any;
  tmp: any;

  add() {
    const {
      currentTable,
      graph,
      toolbar,
      tableCell,
      tableRow,
      tablePanel,
    } = this;

    const btns = [
      toolbar.addButton(
        "geSprite-insertcolumnbefore",
        mxResources.get("insertColumnBefore"),
        () => {
          try {
            if (currentTable != null) {
              graph.insertColumn(
                currentTable,
                tableCell != null ? tableCell.cellIndex : 0
              );
            }
          } catch (e) {
            this.editorUi.handleError(e);
          }
        },
        tablePanel
      ),
      toolbar.addButton(
        "geSprite-insertcolumnafter",
        mxResources.get("insertColumnAfter"),
        () => {
          try {
            if (currentTable != null) {
              graph.insertColumn(
                currentTable,
                tableCell != null ? tableCell.cellIndex + 1 : -1
              );
            }
          } catch (e) {
            this.editorUi.handleError(e);
          }
        },
        tablePanel
      ),
      toolbar.addButton(
        "geSprite-deletecolumn",
        mxResources.get("deleteColumn"),
        () => {
          try {
            if (currentTable != null && tableCell != null) {
              graph.deleteColumn(currentTable, tableCell.cellIndex);
            }
          } catch (e) {
            this.editorUi.handleError(e);
          }
        },
        tablePanel
      ),
      toolbar.addButton(
        "geSprite-insertrowbefore",
        mxResources.get("insertRowBefore"),
        () => {
          try {
            if (currentTable != null && tableRow != null) {
              graph.insertRow(currentTable, tableRow.sectionRowIndex);
            }
          } catch (e) {
            this.editorUi.handleError(e);
          }
        },
        tablePanel
      ),
      toolbar.addButton(
        "geSprite-insertrowafter",
        mxResources.get("insertRowAfter"),
        () => {
          try {
            if (currentTable != null && tableRow != null) {
              graph.insertRow(currentTable, tableRow.sectionRowIndex + 1);
            }
          } catch (e) {
            this.editorUi.handleError(e);
          }
        },
        tablePanel
      ),
      toolbar.addButton(
        "geSprite-deleterow",
        mxResources.get("deleteRow"),
        () => {
          try {
            if (currentTable != null && tableRow != null) {
              graph.deleteRow(currentTable, tableRow.sectionRowIndex);
            }
          } catch (e) {
            this.editorUi.handleError(e);
          }
        },
        tablePanel
      ),
    ];
    this.styleButtons(btns);
    btns[2].style.marginRight = "9px";
    return this;
  }
}
