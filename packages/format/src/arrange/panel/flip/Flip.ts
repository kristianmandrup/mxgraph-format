import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../../../base";
const { mxConstants, mxResources, mxUtils } = mx;

export class Flip extends BaseFormatPanel {
  div: any;

  /**
   *
   */
  add(div) {
    const {
      styleDiv,
      appendFlipLabel,
      appendHorizontalBtn,
      appendVerticalBtn,
    } = this;
    this.div = div;

    styleDiv();
    appendFlipLabel();
    appendHorizontalBtn();
    appendVerticalBtn();

    return div;
  }

  appendVerticalBtn() {
    const { div, graph } = this;
    var btn = mxUtils.button(mxResources.get("vertical"), (_evt) => {
      graph.toggleCellStyles(mxConstants.STYLE_FLIPV, false);
    });

    btn.setAttribute("title", mxResources.get("vertical"));
    btn.style.width = "100px";
    div.appendChild(btn);
  }

  appendHorizontalBtn() {
    const { div, graph } = this;
    var btn = mxUtils.button(mxResources.get("horizontal"), (_evt) => {
      graph.toggleCellStyles(mxConstants.STYLE_FLIPH, false);
    });

    btn.setAttribute("title", mxResources.get("horizontal"));
    btn.style.width = "100px";
    btn.style.marginRight = "2px";
    div.appendChild(btn);
  }

  styleDiv() {
    const { div } = this;
    div.style.paddingTop = "6px";
    div.style.paddingBottom = "10px";
  }

  appendFlipLabel() {
    const { div } = this;
    var span = document.createElement("div");
    span.style.marginTop = "2px";
    span.style.marginBottom = "8px";
    span.style.fontWeight = "bold";
    mxUtils.write(span, mxResources.get("flip"));
    div.appendChild(span);
  }
}
