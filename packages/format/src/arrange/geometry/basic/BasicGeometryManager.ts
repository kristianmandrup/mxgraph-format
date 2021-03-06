import { BasicManager } from "./BasicManager";
import mx from "@mxgraph-app/mx";
const { mxResources, mxUtils } = mx;

export class BasicGeometryManager extends BasicManager {
  /**
   *
   */
  addGeometry(container) {
    const { appendDiv, appendDiv2 } = this;
    appendDiv(container);
    appendDiv2(container);
  }

  appendDiv(container) {
    const { div, span } = this;
    div.appendChild(span);
    const { width, height, autosizeBtn, wrapper, listener } = this;

    div.appendChild(autosizeBtn);
    this.addLabel(div, mxResources.get("width"), 84);
    this.addLabel(div, mxResources.get("height"), 20);
    mxUtils.br(div);

    div.appendChild(wrapper);

    this.addKeyHandler(width, listener);
    this.addKeyHandler(height, listener);

    container.appendChild(div);
  }

  appendDiv2(container) {
    const { span2, div2, listener } = this;
    div2.appendChild(span2);

    const { left, top } = this;

    mxUtils.br(div2);
    this.addLabel(div2, mxResources.get("left"), 84);
    this.addLabel(div2, mxResources.get("top"), 20);

    this.addKeyHandler(left, listener);
    this.addKeyHandler(top, listener);

    this.setChangeListener();

    container.appendChild(div2);
  }
}
