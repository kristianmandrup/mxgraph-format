import mx from "@mxgraph-app/mx";
const { mxConstants, mxUtils } = mx;

export class TextFormatListener {
  format: any;
  setSelected: any;
  fontStyleItems: any;
  fontMenu: any;
  defaultFont: any;
  defaultFontSize: any;
  verticalItem: any;
  input: any;

  dirSelect: any;
  globalSpacing: any;
  topSpacing: any;
  bottomSpacing: any;
  leftSpacing: any;
  rightSpacing: any;

  left: any;
  center: any;
  right: any;

  top: any;
  middle: any;
  bottom: any;

  positionSelect: any;

  get ss() {
    return this.format.getSelectionState();
  }

  listener = (_sender?, _evt?, force?) => {
    const { setFontStyle, setStyle, setAlignPos, setSpacing } = this;
    setFontStyle();
    setStyle(force);
    setAlignPos();
    setSpacing(force);
  };

  setStyle(force) {
    const { input, verticalItem, ss, setSelected } = this;

    setSelected(
      verticalItem,
      mxUtils.getValue(ss.style, mxConstants.STYLE_HORIZONTAL, "1") == "0"
    );

    if (force || document.activeElement != input) {
      var tmp = parseFloat(
        mxUtils.getValue(
          ss.style,
          mxConstants.STYLE_FONTSIZE,
          this.defaultFontSize
        )
      );
      input.value = isNaN(tmp) ? "" : tmp + " pt";
    }
  }

  setFontStyle() {
    const { fontMenu, ss, setSelected, fontStyleItems } = this;

    var fontStyle = mxUtils.getValue(ss.style, mxConstants.STYLE_FONTSTYLE, 0);
    setSelected(
      fontStyleItems[0],
      (fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD
    );
    setSelected(
      fontStyleItems[1],
      (fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC
    );
    setSelected(
      fontStyleItems[2],
      (fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE
    );
    fontMenu.firstChild.nodeValue = mxUtils.getValue(
      ss.style,
      mxConstants.STYLE_FONTFAMILY,
      this.defaultFont
    );
  }

  setAlignPos() {
    const {
      positionSelect,
      ss,
      setSelected,
      left,
      center,
      right,
      top,
      middle,
      bottom,
    } = this;

    var align = mxUtils.getValue(
      ss.style,
      mxConstants.STYLE_ALIGN,
      mxConstants.ALIGN_CENTER
    );
    setSelected(left, align == mxConstants.ALIGN_LEFT);
    setSelected(center, align == mxConstants.ALIGN_CENTER);
    setSelected(right, align == mxConstants.ALIGN_RIGHT);

    var valign = mxUtils.getValue(
      ss.style,
      mxConstants.STYLE_VERTICAL_ALIGN,
      mxConstants.ALIGN_MIDDLE
    );
    setSelected(top, valign == mxConstants.ALIGN_TOP);
    setSelected(middle, valign == mxConstants.ALIGN_MIDDLE);
    setSelected(bottom, valign == mxConstants.ALIGN_BOTTOM);

    var pos = mxUtils.getValue(
      ss.style,
      mxConstants.STYLE_LABEL_POSITION,
      mxConstants.ALIGN_CENTER
    );
    var vpos = mxUtils.getValue(
      ss.style,
      mxConstants.STYLE_VERTICAL_LABEL_POSITION,
      mxConstants.ALIGN_MIDDLE
    );

    if (pos == mxConstants.ALIGN_LEFT && vpos == mxConstants.ALIGN_TOP) {
      positionSelect.value = "topLeft";
    } else if (
      pos == mxConstants.ALIGN_CENTER &&
      vpos == mxConstants.ALIGN_TOP
    ) {
      positionSelect.value = "top";
    } else if (
      pos == mxConstants.ALIGN_RIGHT &&
      vpos == mxConstants.ALIGN_TOP
    ) {
      positionSelect.value = "topRight";
    } else if (
      pos == mxConstants.ALIGN_LEFT &&
      vpos == mxConstants.ALIGN_BOTTOM
    ) {
      positionSelect.value = "bottomLeft";
    } else if (
      pos == mxConstants.ALIGN_CENTER &&
      vpos == mxConstants.ALIGN_BOTTOM
    ) {
      positionSelect.value = "bottom";
    } else if (
      pos == mxConstants.ALIGN_RIGHT &&
      vpos == mxConstants.ALIGN_BOTTOM
    ) {
      positionSelect.value = "bottomRight";
    } else if (pos == mxConstants.ALIGN_LEFT) {
      positionSelect.value = "left";
    } else if (pos == mxConstants.ALIGN_RIGHT) {
      positionSelect.value = "right";
    } else {
      positionSelect.value = "center";
    }
  }

  setSpacing(force) {
    const { ss } = this;
    var dir = mxUtils.getValue(
      ss.style,
      mxConstants.STYLE_TEXT_DIRECTION,
      mxConstants.DEFAULT_TEXT_DIRECTION
    );

    const {
      dirSelect,
      globalSpacing,
      topSpacing,
      bottomSpacing,
      rightSpacing,
      leftSpacing,
    } = this;

    if (dir == mxConstants.TEXT_DIRECTION_RTL) {
      dirSelect.value = "rightToLeft";
    } else if (dir == mxConstants.TEXT_DIRECTION_LTR) {
      dirSelect.value = "leftToRight";
    } else if (dir == mxConstants.TEXT_DIRECTION_AUTO) {
      dirSelect.value = "automatic";
    }

    if (force || document.activeElement != globalSpacing) {
      var tmp = parseFloat(
        mxUtils.getValue(ss.style, mxConstants.STYLE_SPACING, 2)
      );
      globalSpacing.value = isNaN(tmp) ? "" : tmp + " pt";
    }

    if (force || document.activeElement != topSpacing) {
      var tmp = parseFloat(
        mxUtils.getValue(ss.style, mxConstants.STYLE_SPACING_TOP, 0)
      );
      topSpacing.value = isNaN(tmp) ? "" : tmp + " pt";
    }

    if (force || document.activeElement != rightSpacing) {
      var tmp = parseFloat(
        mxUtils.getValue(ss.style, mxConstants.STYLE_SPACING_RIGHT, 0)
      );
      rightSpacing.value = isNaN(tmp) ? "" : tmp + " pt";
    }

    if (force || document.activeElement != bottomSpacing) {
      var tmp = parseFloat(
        mxUtils.getValue(ss.style, mxConstants.STYLE_SPACING_BOTTOM, 0)
      );
      bottomSpacing.value = isNaN(tmp) ? "" : tmp + " pt";
    }

    if (force || document.activeElement != leftSpacing) {
      var tmp = parseFloat(
        mxUtils.getValue(ss.style, mxConstants.STYLE_SPACING_LEFT, 0)
      );
      leftSpacing.value = isNaN(tmp) ? "" : tmp + " pt";
    }
  }
}
