import { BasicManager } from "./BasicManager";

export class BasicManagerListener extends BasicManager {
  // extract as class
  listener = (_sender?, _evt?, force?) => {
    const { rect, graph, div, width, height, div2, left, top } = this;

    if (
      !rect.containsLabel &&
      rect.vertices.length == graph.getSelectionCount() &&
      rect.width != null &&
      rect.height != null
    ) {
      div.style.display = "";

      if (force || document.activeElement != width) {
        width.value =
          this.inUnit(rect.width) + (rect.width == "" ? "" : " " + this.unit);
      }

      if (force || document.activeElement != height) {
        height.value =
          this.inUnit(rect.height) + (rect.height == "" ? "" : " " + this.unit);
      }
    } else {
      div.style.display = "none";
    }

    if (
      rect.vertices.length == graph.getSelectionCount() &&
      rect.x != null &&
      rect.y != null
    ) {
      div2.style.display = "";

      if (force || document.activeElement != left) {
        left.value =
          this.inUnit(rect.x) + (rect.x == "" ? "" : " " + this.unit);
      }

      if (force || document.activeElement != top) {
        top.value = this.inUnit(rect.y) + (rect.y == "" ? "" : " " + this.unit);
      }
    } else {
      div2.style.display = "none";
    }
  };
}
