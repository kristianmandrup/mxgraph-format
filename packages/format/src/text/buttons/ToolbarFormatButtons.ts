import mx from "@mxgraph-app/mx";
const { mxConstants, mxResources, mxEvent } = mx;

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

  createFilenameDialog(..._args): any {
    return {}; // new FilenameDialog
  }

  addAll() {
    this.addBtns();
    this.addBtns1();
    this.addBtns2();
    this.addBtns3();
  }

  addBtns() {
    const { insertPanel, toolbar } = this;
    var insertBtns = toolbar.addItems(["link", "image"], insertPanel, true);
    this.styleButtons(insertBtns);
  }

  addBtns1() {
    const { insertPanel, toolbar } = this;
    const btns = [
      toolbar.addButton(
        "geSprite-horizontalrule",
        mxResources.get("insertHorizontalRule"),
        function () {
          document.execCommand("inserthorizontalrule", false);
        },
        insertPanel
      ),
      toolbar.addMenuFunctionInContainer(
        insertPanel,
        "geSprite-table",
        mxResources.get("table"),
        false,
        (menu) => {
          this.editorUi.menus.addInsertTableItem(menu);
        }
      ),
    ];

    this.styleButtons(btns);
    return this;
  }

  addBtns2() {
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

  addBtns3() {
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

  addBtns4() {
    const { tmp, graph, toolbar } = this;
    var btns = [
      toolbar.addButton(
        "geSprite-orderedlist",
        mxResources.get("numberedList"),
        function () {
          document.execCommand("insertorderedlist", false);
        },
        tmp
      ),
      toolbar.addButton(
        "geSprite-unorderedlist",
        mxResources.get("bulletedList"),
        function () {
          document.execCommand("insertunorderedlist", false);
        },
        tmp
      ),
      toolbar.addButton(
        "geSprite-outdent",
        mxResources.get("decreaseIndent"),
        function () {
          document.execCommand("outdent", false);
        },
        tmp
      ),
      toolbar.addButton(
        "geSprite-indent",
        mxResources.get("increaseIndent"),
        function () {
          document.execCommand("indent", false);
        },
        tmp
      ),
      toolbar.addButton(
        "geSprite-removeformat",
        mxResources.get("removeFormat"),
        function () {
          document.execCommand("removeformat", false);
        },
        tmp
      ),
      toolbar.addButton(
        "geSprite-code",
        mxResources.get("html"),
        function () {
          graph.cellEditor.toggleViewMode();
        },
        tmp
      ),
    ];
    this.styleButtons(btns);
    btns[btns.length - 2].style.marginLeft = "9px";
    return this;
  }
}
