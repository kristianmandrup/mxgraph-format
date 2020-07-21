import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../base/BaseFormatPanel";
import { GridOption } from "./GridOption";
import { PanelOptions } from "./PanelOptions";
import { GraphUpdater } from "./GraphUpdater";
import { PaperSize } from "./PaperSize";
import { StyleOpts } from "./StyleOpts";
const { mxResources } = mx;
// const { IMAGE_PATH } = resources

export class DiagramFormatPanel extends BaseFormatPanel {
  graph: any;
  editorUi: any;
  gridEnabledListener: any;
  input: any;
  fPanel: any;
  getUnit: any;
  inUnit: any;
  createStepper: any;
  createColorOption: any;
  getUnitStep: any;
  isFloatUnit: any;
  listeners: any[] = [];
  addKeyHandler: any;
  format: any;
  container: any;

  constructor(format, editorUi, container) {
    super(format, editorUi, container);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addOptions(div) {
    new PanelOptions(this.format, this.editorUi, this.container).add(div);
  }

  /**
   *
   */
  addGridOption(container) {
    new GridOption(this.format, this.editorUi, container).add();
  }

  update(evt) {
    new GraphUpdater(this, evt).update();
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addDocumentProperties(div) {
    // Hook for subclassers
    div.appendChild(this.createTitle(mxResources.get("options")));

    return div;
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addPaperSize(div) {
    return new PaperSize(
      this.format,
      this.editorUi,
      this.container
    ).addPaperSize(div);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addStyleOps(div) {
    return new StyleOpts(
      this.format,
      this.editorUi,
      this.container
    ).addStyleOps(div);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  destroy() {
    BaseFormatPanel.prototype.destroy.apply(this, []);

    if (this.gridEnabledListener) {
      this.editorUi.removeListener(this.gridEnabledListener);
      this.gridEnabledListener = null;
    }
  }
}
