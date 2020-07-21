import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../../../base";
const { mxResources, mxUtils } = mx;

export class Layer extends BaseFormatPanel {
  div: any;

  appendToFrontBtn() {
    const { div, actions, resource } = this;
    const btn = mxUtils.button(resource("toFront"), (_evt) => {
      actions.get("toFront").funct();
    });

    btn.setAttribute(
      "title",
      resource("toFront") + " (" + actions.get("toFront").shortcut + ")"
    );
    btn.style.width = "100px";
    btn.style.marginRight = "2px";
    div.appendChild(btn);
  }

  appendToBackBtn() {
    const { div, actions, resource } = this;
    const btn = mxUtils.button(resource("toBack"), (_evt) => {
      actions.get("toBack").funct();
    });

    btn.setAttribute(
      "title",
      mxResources.get("toBack") + " (" + actions.get("toBack").shortcut + ")"
    );
    btn.style.width = "100px";
    div.appendChild(btn);
  }

  /**
   *
   */
  add(div) {
    this.div = div;
    const { appendToFrontBtn, appendToBackBtn } = this;
    appendToFrontBtn();
    appendToBackBtn();
    return div;
  }
}
