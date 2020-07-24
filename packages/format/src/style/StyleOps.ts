import { BaseStyleFormat } from "./BaseStyleFormat";
import mx from "../text/handler/style/node_modules/@mxgraph-app/mx";
const { mxResources, mxUtils } = mx;

export class StyleOps extends BaseStyleFormat {
  div: any;

  appendSetAsDefaultStyleBtn() {
    const { div } = this;
    const btn = mxUtils.button(mxResources.get("setAsDefaultStyle"), (_evt) => {
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
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addStyleOps(div) {
    this.div = div;
    const { styleDiv, appendSetAsDefaultStyleBtn } = this;
    styleDiv();
    appendSetAsDefaultStyleBtn();

    return div;
  }

  styleDiv() {
    const { div } = this;
    div.style.paddingTop = "10px";
    div.style.paddingBottom = "10px";
  }
}
