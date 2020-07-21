import { BaseStyleFormat } from "./BaseStyleFormat";
import mx from "@mxgraph-app/mx";
const { mxResources, mxUtils } = mx;

export class StyleOps extends BaseStyleFormat {
  /**
   * Adds the label menu items to the given menu and parent.
   */
  addStyleOps(div) {
    div.style.paddingTop = "10px";
    div.style.paddingBottom = "10px";

    var btn = mxUtils.button(mxResources.get("setAsDefaultStyle"), (_evt) => {
      this.editorUi.actions.get("setAsDefaultStyle").funct();
    });

    btn.setAttribute(
      "title",
      mxResources.get("setAsDefaultStyle") +
        " (" +
        this.editorUi.actions.get("setAsDefaultStyle").shortcut +
        ")"
    );
    btn.style.width = "202px";
    div.appendChild(btn);

    return div;
  }
}
