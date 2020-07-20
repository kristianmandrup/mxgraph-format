import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../base/BaseFormatPanel";
import { GridOption } from "./GridOption";
import { PanelOptions } from "./PanelOptions";
import { GraphUpdater } from "./GraphUpdater";
const { mxResources, mxEvent, mxUtils } = mx;
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

  // PageSetupDialog.addPageFormatPanel
  addPageFormatPanel(_container, _label, _format, _fn): any {
    return {};
  }

  // new ChangePageSetup
  createChangePageSetup(_ui, _a, _b, _pageFormat): any {
    return {};
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addPaperSize(div) {
    var ui = this.editorUi;
    var editor = ui.editor;
    var graph = editor.graph;
    const { createChangePageSetup, addPageFormatPanel, createTitle } = this;

    div.appendChild(createTitle(mxResources.get("paperSize")));

    var accessor = addPageFormatPanel(
      div,
      "formatpanel",
      graph.pageFormat,
      function (pageFormat) {
        if (
          graph.pageFormat == null ||
          graph.pageFormat.width != pageFormat.width ||
          graph.pageFormat.height != pageFormat.height
        ) {
          var change = createChangePageSetup(ui, null, null, pageFormat);
          change.ignoreColor = true;
          change.ignoreImage = true;

          graph.model.execute(change);
        }
      }
    );

    this.addKeyHandler(accessor.widthInput, function () {
      accessor.set(graph.pageFormat);
    });
    this.addKeyHandler(accessor.heightInput, function () {
      accessor.set(graph.pageFormat);
    });

    var listener = function () {
      accessor.set(graph.pageFormat);
    };

    ui.addListener("pageFormatChanged", listener);
    this.listeners.push({
      destroy: function () {
        ui.removeListener(listener);
      },
    });

    graph.getModel().addListener(mxEvent.CHANGE, listener);
    this.listeners.push({
      destroy: function () {
        graph.getModel().removeListener(listener);
      },
    });

    return div;
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addStyleOps(div) {
    var btn = mxUtils.button(mxResources.get("editData"), (_evt) => {
      this.editorUi.actions.get("editData").funct();
    });

    btn.setAttribute(
      "title",
      mxResources.get("editData") +
        " (" +
        this.editorUi.actions.get("editData").shortcut +
        ")"
    );
    btn.style.width = "202px";
    btn.style.marginBottom = "2px";
    div.appendChild(btn);

    mxUtils.br(div);

    btn = mxUtils.button(mxResources.get("clearDefaultStyle"), (_evt) => {
      this.editorUi.actions.get("clearDefaultStyle").funct();
    });

    btn.setAttribute(
      "title",
      mxResources.get("clearDefaultStyle") +
        " (" +
        this.editorUi.actions.get("clearDefaultStyle").shortcut +
        ")"
    );
    btn.style.width = "202px";
    div.appendChild(btn);

    return div;
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
