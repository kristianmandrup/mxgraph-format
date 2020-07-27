import { EdgeManager } from "./EdgeManager";

export class EdgeListener extends EdgeManager {
  force: boolean = false;

  get cell() {
    return this.graph.getSelectionCell();
  }

  get shape() {
    return this.rect.style.shape;
  }

  handler = (_sender?, _evt?, force = false) => {
    this.force = force;
    const { div, shape, updateWidth } = this;

    if (shape == "link" || shape == "flexArrow") {
      div.style.display = "";
      updateWidth();
    } else {
      div.style.display = "none";
    }

    const { onSelectedEdgeCell, hideAll } = this;
    onSelectedEdgeCell() || hideAll();
  };

  get shouldUpdateWidth() {
    const { force, width } = this;
    return force || document.activeElement != width;
  }

  updateWidth() {
    const { shouldUpdateWidth, flexArrowWidth, width } = this;
    if (!shouldUpdateWidth) return;
    width.value = flexArrowWidth + " pt";
  }

  hideAll() {
    const { hideSourceDiv, hideTargetDiv } = this;
    hideSourceDiv();
    hideTargetDiv();
  }

  hideSourceDiv() {
    this.divt.style.display = "none";
  }

  hideTargetDiv() {
    this.divt.style.display = "none";
  }

  get selectionCount() {
    return this.graph.getSelectionCount;
  }

  get isSelectedEdgeCell() {
    const { graph, selectionCount, cell } = this;
    return selectionCount == 1 && graph.model.isEdge(cell);
  }

  get geo() {
    const { graph, cell } = this;
    return graph.model.getGeometry(cell);
  }

  get isValidTargetPoint() {
    const { graph, geo, cell } = this;
    return geo.targetPoint && !graph.model.getTerminal(cell, false);
  }

  get isValidSourcePoint() {
    const { graph, geo, cell } = this;
    return geo.sourcePoint && !graph.model.getTerminal(cell, true);
  }

  onSelectedEdgeCell() {
    if (!this.isSelectedEdgeCell) return;
    const { setSource, setTarget } = this;
    setSource();
    setTarget();
    return true;
  }

  setSource() {
    const { setSourcePoint, hideSourceDiv } = this;
    setSourcePoint() || hideSourceDiv();
  }

  setSourcePoint() {
    const { isValidSourcePoint, geo, xs, ys } = this;
    if (!isValidSourcePoint) return;
    xs.value = geo.sourcePoint.x;
    ys.value = geo.sourcePoint.y;
    return true;
  }

  setTarget() {
    const { setTargetPoint, hideTargetDiv } = this;
    setTargetPoint() || hideTargetDiv();
  }

  setTargetPoint() {
    const { isValidTargetPoint, geo, xt, yt } = this;
    if (!isValidTargetPoint) return;
    xt.value = geo.targetPoint.x;
    yt.value = geo.targetPoint.y;
    return true;
  }
}
