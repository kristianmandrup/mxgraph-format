import { BaseFormatHandler } from "./BaseFormatHandler";
import mx from "@mxgraph-app/mx";
import { FontSizeHandler } from "./font-size";
const { mxConstants } = mx;

export class InputHandler extends BaseFormatHandler {
  input: any;
  installInputHandler: any;
  defaultFontSize: any;
  pendingFontSize: any;

  create() {
    const { input, handleFontSize } = this;
    return this.installInputHandler(
      input,
      mxConstants.STYLE_FONTSIZE,
      this.defaultFontSize,
      1,
      999,
      " pt",
      handleFontSize,
      true
    );
  }

  handleFontSize = (fontSize) => {
    this.createFontSizeHandler(fontSize).handle();
  };

  createFontSizeHandler(fontSize) {
    return new FontSizeHandler(this, fontSize);
  }
}
