import mx from "@mxgraph-app/mx";
const { mxResources } = mx;
import { BaseButtons } from "./BaseButtons";

export class Buttons4 extends BaseButtons {
  tmp: any;

  add() {
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
