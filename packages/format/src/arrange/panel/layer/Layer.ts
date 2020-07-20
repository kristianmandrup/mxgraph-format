import mx from "@mxgraph-app/mx";
import { BaseArrangeFormat } from "../../BaseArrangeFormat";
const { mxResources, mxUtils } = mx;

export class Layer extends BaseArrangeFormat {
  /**
   *
   */
  add(div) {
    var ui = this.editorUi;

    var btn = mxUtils.button(mxResources.get("toFront"), (_evt) => {
      ui.actions.get("toFront").funct();
    });

    btn.setAttribute(
      "title",
      mxResources.get("toFront") +
        " (" +
        this.editorUi.actions.get("toFront").shortcut +
        ")"
    );
    btn.style.width = "100px";
    btn.style.marginRight = "2px";
    div.appendChild(btn);

    var btn = mxUtils.button(mxResources.get("toBack"), (_evt) => {
      ui.actions.get("toBack").funct();
    });

    btn.setAttribute(
      "title",
      mxResources.get("toBack") +
        " (" +
        this.editorUi.actions.get("toBack").shortcut +
        ")"
    );
    btn.style.width = "100px";
    div.appendChild(btn);

    return div;
  }
}
