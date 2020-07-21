import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../base";
const { mxEvent } = mx;

export class PaperSize extends BaseFormatPanel {
  div: any;
  accessor: any;
  listener: any;

  // PageSetupDialog.addPageFormatPanel
  addPageFormatPanel(_container, _label, _format, _fn): any {
    return {};
  }

  // new ChangePageSetup
  createChangePageSetup(_ui, _a, _b, _pageFormat): any {
    return {};
  }

  createAccessor() {
    const { div, ui, graph, addPageFormatPanel, createChangePageSetup } = this;
    this.accessor = addPageFormatPanel(
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

    this.registerAccessorHandlers();
  }

  registerAccessorHandlers() {
    const { accessor, graph } = this;
    this.addKeyHandler(accessor.widthInput, function () {
      accessor.set(graph.pageFormat);
    });
    this.addKeyHandler(accessor.heightInput, function () {
      accessor.set(graph.pageFormat);
    });

    this.listener = function () {
      accessor.set(graph.pageFormat);
    };
  }

  appendTitle() {
    const { div, createTitle, resource } = this;
    div.appendChild(createTitle(resource("paperSize")));
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addPaperSize(div) {
    this.div = div;
    const { createAccessor, appendTitle, ui, graph } = this;
    createAccessor();
    appendTitle();

    const { listener } = this;
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
}
