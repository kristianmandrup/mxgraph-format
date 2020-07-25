import mx from "@mxgraph-app/mx";
const { mxUtils } = mx;

export class Buttons {
  /**
   *
   */
  style(elements) {
    for (let element of elements) {
      mxUtils.setPrefixedStyle(element.style, "borderRadius", "3px");
      mxUtils.setOpacity(element, 100);
      element.style.border = "1px solid #a0a0a0";
      element.style.padding = "4px";
      element.style.paddingTop = "3px";
      element.style.paddingRight = "1px";
      element.style.margin = "1px";
      element.style.width = "24px";
      element.style.height = "20px";
      element.className += " geColorBtn";
    }
  }
}
