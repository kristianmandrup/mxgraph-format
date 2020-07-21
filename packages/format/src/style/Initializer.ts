import mx from "@mxgraph-app/mx";
import { BaseStyleFormat } from "./BaseStyleFormat";
const { mxConstants, mxUtils } = mx;

export class Initializer extends BaseStyleFormat {
  panel: any;

  constructor(panel, { format, editorUi, container }) {
    super(format, editorUi, container);
    this.panel = panel;
  }

  get isSvgImage() {
    const { ss } = this;
    return (
      ss.containsImage &&
      ss.vertices.length == 1 &&
      ss.style.shape == "image" &&
      ss.style.image != null &&
      ss.style.image.substring(0, 19) == "data:image/svg+xml;"
    );
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  init() {
    const { ss } = this;
    if (ss.containsLabel) return;
    const {
      appendOpacityPanel,
      appendStrokePanel,
      appendSvgStylesPanel,
      appendFillPanel,
      appendEffectsPanel,
      appendEditOptionsPanel,
    } = this;

    appendSvgStylesPanel();
    appendFillPanel();
    appendStrokePanel();
    appendOpacityPanel();
    appendEffectsPanel();
    appendEditOptionsPanel();
  }

  appendEditOptionsPanel() {
    const { appendPanel } = this;
    const { addEditOps, addStyleOps } = this.panel;
    var opsPanel = addEditOps(this.createPanel());

    if (opsPanel.firstChild != null) {
      mxUtils.br(opsPanel);
    }

    appendPanel(addStyleOps(opsPanel));
  }

  appendEffectsPanel() {
    const { appendPanel } = this;
    const { addEffects } = this.panel;
    appendPanel(addEffects);
  }

  appendLineJumpsPanel() {
    const { appendPanel } = this;
    const { addLineJumps } = this.panel;
    appendPanel(addLineJumps);
  }

  appendPanel(fn) {
    const { createPanel } = this;
    this.container.appendChild(fn(createPanel()));
  }

  appendStrokePanel() {
    const { appendPanel } = this;
    const { addStroke } = this.panel;
    appendPanel(addStroke);
  }

  appendFillPanel() {
    const { ss, appendPanel } = this;
    const { addFill } = this.panel;
    if (!ss.containsImage || ss.style.shape == "image") {
      appendPanel(addFill);
    }
  }

  appendSvgStylesPanel() {
    const { isSvgImage, appendPanel } = this;
    const { addSvgStyles } = this.panel;
    if (isSvgImage) {
      appendPanel(addSvgStyles);
    }
  }

  appendOpacityPanel() {
    const { resource, createRelativeOption, container } = this;
    const opacityPanel = createRelativeOption(
      resource("opacity"),
      mxConstants.STYLE_OPACITY,
      41
    );
    opacityPanel.style.paddingTop = "8px";
    opacityPanel.style.paddingBottom = "8px";
    container.appendChild(opacityPanel);
  }
}
