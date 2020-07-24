import mx from "@mxgraph-app/mx";
const { mxResources, mxEvent, mxConstants } = mx;
import { BaseButtons } from "./BaseButtons";

export class Buttons3 extends BaseButtons {
  currentTable: any;
  tableCell: any;
  tablePanel2: any;

  createFilenameDialog(..._args): any {
    return {}; // new FilenameDialog
  }

  add() {
    const {
      editorUi,
      graph,
      toolbar,
      currentTable,
      tableCell,
      tablePanel2,
    } = this;
    const ui = editorUi;
    var btns = [
      toolbar.addButton(
        "geSprite-strokecolor",
        mxResources.get("borderColor"),
        (evt) => {
          if (currentTable != null) {
            // Converts rgb(r,g,b) values
            var color = currentTable.style.borderColor.replace(
              /\brgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g,
              function (_$0, $1, $2, $3) {
                return (
                  "#" +
                  ("0" + Number($1).toString(16)).substr(-2) +
                  ("0" + Number($2).toString(16)).substr(-2) +
                  ("0" + Number($3).toString(16)).substr(-2)
                );
              }
            );
            editorUi.pickColor(color, function (newColor) {
              var targetElt =
                tableCell != null && (evt == null || !mxEvent.isShiftDown(evt))
                  ? tableCell
                  : currentTable;

              graph.processElements(targetElt, function (elt) {
                elt.style.border = null;
              });

              if (newColor == null || newColor == mxConstants.NONE) {
                targetElt.removeAttribute("border");
                targetElt.style.border = "";
                targetElt.style.borderCollapse = "";
              } else {
                targetElt.setAttribute("border", "1");
                targetElt.style.border = "1px solid " + newColor;
                targetElt.style.borderCollapse = "collapse";
              }
            });
          }
        },
        tablePanel2
      ),
      toolbar.addButton(
        "geSprite-fillcolor",
        mxResources.get("backgroundColor"),
        (evt) => {
          // Converts rgb(r,g,b) values
          if (currentTable != null) {
            var color = currentTable.style.backgroundColor.replace(
              /\brgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g,
              function (_$0, $1, $2, $3) {
                return (
                  "#" +
                  ("0" + Number($1).toString(16)).substr(-2) +
                  ("0" + Number($2).toString(16)).substr(-2) +
                  ("0" + Number($3).toString(16)).substr(-2)
                );
              }
            );
            this.editorUi.pickColor(color, function (newColor) {
              var targetElt =
                tableCell != null && (evt == null || !mxEvent.isShiftDown(evt))
                  ? tableCell
                  : currentTable;

              graph.processElements(targetElt, function (elt) {
                elt.style.backgroundColor = null;
              });

              if (newColor == null || newColor == mxConstants.NONE) {
                targetElt.style.backgroundColor = "";
              } else {
                targetElt.style.backgroundColor = newColor;
              }
            });
          }
        },
        tablePanel2
      ),
      toolbar.addButton(
        "geSprite-fit",
        mxResources.get("spacing"),
        () => {
          if (currentTable != null) {
            var value = currentTable.getAttribute("cellPadding") || 0;

            var dlg = this.createFilenameDialog(
              ui,
              value,
              mxResources.get("apply"),
              (newValue) => {
                if (newValue != null && newValue.length > 0) {
                  currentTable.setAttribute("cellPadding", newValue);
                } else {
                  currentTable.removeAttribute("cellPadding");
                }
              },
              mxResources.get("spacing")
            );
            ui.showDialog(dlg.container, 300, 80, true, true);
            dlg.init();
          }
        },
        tablePanel2
      ),
      toolbar.addButton(
        "geSprite-left",
        mxResources.get("left"),
        function () {
          if (currentTable != null) {
            currentTable.setAttribute("align", "left");
          }
        },
        tablePanel2
      ),
      toolbar.addButton(
        "geSprite-center",
        mxResources.get("center"),
        () => {
          if (currentTable != null) {
            currentTable.setAttribute("align", "center");
          }
        },
        tablePanel2
      ),
      toolbar.addButton(
        "geSprite-right",
        mxResources.get("right"),
        () => {
          if (currentTable != null) {
            currentTable.setAttribute("align", "right");
          }
        },
        tablePanel2
      ),
    ];
    this.styleButtons(btns);
    btns[2].style.marginRight = "9px";
    return this;
  }
}
