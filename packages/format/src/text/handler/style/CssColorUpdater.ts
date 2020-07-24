export class CssColorUpdater {
  currentFontColor: any;
  currentBgColor: any;
  css: any;

  fontColorApply: any;
  bgColorApply: any;

  constructor() {}

  colorPattern = /\brgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g;
  colorReplace = (_$0, $1, $2, $3) => {
    return (
      "#" +
      ("0" + Number($1).toString(16)).substr(-2) +
      ("0" + Number($2).toString(16)).substr(-2) +
      ("0" + Number($3).toString(16)).substr(-2)
    );
  };

  // Converts rgb(r,g,b) values
  get color() {
    const { colorPattern, colorReplace, css } = this;
    return css.color.replace(colorPattern, colorReplace);
  }

  get color2() {
    const { colorPattern, colorReplace, css } = this;
    return css.backgroundColor.replace(colorPattern, colorReplace);
  }

  update() {
    const { updateFontColor, updateBgColor } = this;
    updateFontColor();
    updateBgColor();
    return this;
  }

  updateBgColor() {
    const { color2, bgColorApply, currentBgColor } = this;
    if (!bgColorApply) return;
    if (color2.charAt(0) == "#") {
      this.currentBgColor = color2;
    } else {
      this.currentBgColor = null;
    }

    bgColorApply(currentBgColor, true);
  }

  updateFontColor() {
    const { fontColorApply, color, currentFontColor } = this;
    // Updates the color picker for the current font
    if (!fontColorApply) return;
    if (color.charAt(0) == "#") {
      this.currentFontColor = color;
    } else {
      this.currentFontColor = "#000000";
    }

    fontColorApply(currentFontColor, true);
  }
}
