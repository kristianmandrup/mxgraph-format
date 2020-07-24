import mx from "@mxgraph-app/mx";
const { mxResources } = mx;
import { BaseButtons } from "./BaseButtons";

export class Buttons1 extends BaseButtons {
  add() {
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
}
