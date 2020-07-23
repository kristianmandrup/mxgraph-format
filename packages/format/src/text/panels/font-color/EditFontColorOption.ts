import { FontColorPanel } from "./FontColorPanel";
import { ColorUpdater } from "./ColorUpdater";

export class EditFontColorOption extends FontColorPanel {
  initialColor = "#000000";

  getColor = () => {
    return this.currentFontColor;
  };

  setColor = (color) => {
    this.createColorUpdater().update(color);
  };

  createColorUpdater() {
    return new ColorUpdater(this.format, this.editorUi, this.container);
  }

  get editFontColorOption() {
    const { getColor, setColor, resource, initialColor } = this;
    return this.createColorOption(
      resource("fontColor"),
      getColor,
      setColor,
      initialColor,
      {
        install: (apply) => {
          this.fontColorApply = apply;
        },
        destroy: () => {
          this.fontColorApply = null;
        },
      },
      null,
      true
    );
  }
}
