import mx from "@mxgraph-app/mx";
const { mxClient, mxUtils } = mx;
import resources from "@mxgraph-app/resources";
const { IMAGE_PATH } = resources;

export class Arrow {
  arrow: any;
  element: any;
  height: any;
  symbol: any;

  buttonBackgroundColor: any;

  /**
   *
   */
  add(element, height?) {
    const { createArrow, createSymbol, styleElement } = this;
    this.element = element;
    height = height != null ? height : 10;
    this.height = height;

    createArrow();
    createSymbol();
    styleElement();

    const { arrow, symbol } = this;
    element.appendChild(arrow);
    return symbol;
  }

  styleElement() {
    const { element } = this;
    mxUtils.setOpacity(element, 100);
    element.style.border = "1px solid #a0a0a0";
    element.style.backgroundColor = this.buttonBackgroundColor;
    element.style.backgroundImage = "none";
    element.style.width = "auto";
    element.className += " geColorBtn";
    mxUtils.setPrefixedStyle(element.style, "borderRadius", "3px");
    return element;
  }

  createSymbol() {
    const { element } = this;
    var symbol = element.getElementsByTagName("div")[0];

    if (!symbol) return;
    symbol.style.paddingRight = "6px";
    symbol.style.marginLeft = "4px";
    symbol.style.marginTop = "-1px";
    symbol.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
    mxUtils.setOpacity(symbol, 60);
  }

  createArrow() {
    const { height } = this;
    var arrow = document.createElement("div");
    arrow.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
    arrow.style.padding = "6px";
    arrow.style.paddingRight = "4px";

    var m = 10 - height;

    if (m == 2) {
      arrow.style.paddingTop = 6 + "px";
    } else if (m > 0) {
      arrow.style.paddingTop = 6 - m + "px";
    } else {
      arrow.style.marginTop = "-2px";
    }

    arrow.style.height = height + "px";
    arrow.style.borderLeft = "1px solid #a0a0a0";
    arrow.innerHTML =
      '<img border="0" src="' +
      (mxClient.IS_SVG
        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUeNpidHB2ZyAGsACxDRBPIKCuA6TwCBB/h2rABu4A8SYmKCcXiP/iUFgAxL9gCi8A8SwsirZCMQMTkmANEH9E4v+CmsaArvAdyNFI/FlQ92EoBIE+qCRIUz168DBgsU4OqhinQpgHMABAgAEALY4XLIsJ20oAAAAASUVORK5CYII="
        : IMAGE_PATH + "/dropdown.png") +
      '" style="margin-bottom:4px;">';
    mxUtils.setOpacity(arrow, 70);
    this.arrow = arrow;
    return arrow;
  }
}
