import mx from "../../../text/handler/style/node_modules/@mxgraph-app/mx";
import { BaseFormatPanel } from "../../../base";
const { mxResources, mxUtils } = mx;

export class Distribute extends BaseFormatPanel {
  div: any;

  /**
   *
   */
  add(div) {
    const { appendTitle, appendHorizontalBtn, appendVerticalBtn } = this;
    this.div = div;
    appendTitle();
    appendHorizontalBtn();
    appendVerticalBtn();
    return div;
  }

  appendTitle() {
    const { div } = this;
    div.style.paddingTop = "6px";
    div.style.paddingBottom = "12px";
    div.appendChild(this.createTitle(mxResources.get("distribute")));
  }

  appendHorizontalBtn() {
    const { div, graph } = this;
    var btn = mxUtils.button(mxResources.get("horizontal"), (_evt) => {
      graph.distributeCells(true);
    });

    btn.setAttribute("title", mxResources.get("horizontal"));
    btn.style.width = "100px";
    btn.style.marginRight = "2px";
    div.appendChild(btn);
  }

  appendVerticalBtn() {
    const { div, graph } = this;
    var btn = mxUtils.button(mxResources.get("vertical"), (_evt) => {
      graph.distributeCells(false);
    });

    btn.setAttribute("title", mxResources.get("vertical"));
    btn.style.width = "100px";
    div.appendChild(btn);
  }
}
