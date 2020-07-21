import { BaseFormatPanel } from "../base";

export class StyleOpts extends BaseFormatPanel {
  div: any;

  appendEditDataBtn() {
    const { resource, createBtn, div } = this;
    const btn = createBtn(resource("editData"), (_evt) => {
      this.editorUi.actions.get("editData").funct();
    });

    btn.setAttribute(
      "title",
      resource("editData") +
        " (" +
        this.editorUi.actions.get("editData").shortcut +
        ")"
    );
    btn.style.width = "202px";
    btn.style.marginBottom = "2px";
    div.appendChild(btn);
  }

  appendClearDefaultStyleBtn() {
    const { actions, resource, createBtn, div } = this;
    const btn = createBtn(resource("clearDefaultStyle"), (_evt) => {
      actions.get("clearDefaultStyle").funct();
    });

    btn.setAttribute(
      "title",
      resource("clearDefaultStyle") +
        " (" +
        actions.get("clearDefaultStyle").shortcut +
        ")"
    );
    btn.style.width = "202px";
    div.appendChild(btn);
  }

  appendDivider() {
    this.createBreak(this.div);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addStyleOps(div) {
    const {
      appendEditDataBtn,
      appendClearDefaultStyleBtn,
      appendDivider,
    } = this;
    this.div = div;
    appendEditDataBtn();
    appendDivider();
    appendClearDefaultStyleBtn();
    return div;
  }
}
