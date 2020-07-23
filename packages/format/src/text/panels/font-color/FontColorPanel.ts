import { BaseFormatPanel } from "../../../base";
import { EditFontColorOption } from "./EditFontColorOption";
import { FontColorOption } from "./FontColorOption";

export class FontColorPanel extends BaseFormatPanel {
  editorUi: any;
  currentFontColor: any;
  fontColorApply: any;
  bgPanel: any;
  borderPanel: any;

  editFontColorOptionInst: any;
  fontColorOptionInst: any;

  constructor(format, editorUi, container) {
    super(format, editorUi, container);
    this.fontColorOptionInst = new FontColorOption(format, editorUi, container);
    this.editFontColorOptionInst = new EditFontColorOption(
      format,
      editorUi,
      container
    );
  }

  create() {
    const { graph } = this;
    const panel = graph.cellEditor.isContentEditing()
      ? this.editFontColorOption
      : this.fontColorOption;
    panel.style.fontWeight = "bold";
    return panel;
  }

  get editFontColorOption() {
    return this.editFontColorOptionInst.editFontColorOption;
  }

  get fontColorOption() {
    return this.fontColorOptionInst.fontColorOption;
  }
}
