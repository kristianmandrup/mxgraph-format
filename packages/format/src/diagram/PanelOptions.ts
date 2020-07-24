import mx from "../text/handler/style/node_modules/@mxgraph-app/mx";
import { BaseFormatPanel } from "../base";
const { mxResources } = mx;

export class PanelOptions extends BaseFormatPanel {
  constructor(format, formatPanel, container) {
    super(format, formatPanel.editorUi, container);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  add(div) {
    var ui = this.editorUi;
    var editor = ui.editor;
    var graph = editor.graph;
    div.appendChild(this.createTitle(mxResources.get("options")));
    if (!graph.isEnabled()) return div;

    const { addGuides, addConnectionArrows, addConnectionPoints } = this;

    addConnectionArrows(div);
    addConnectionPoints(div);
    addGuides(div);

    return div;
  }

  addConnectionPoints(div) {
    const { graph, ui } = this;
    const { listener } = div;
    // Connection points
    div.appendChild(
      this.createOption(
        mxResources.get("connectionPoints"),
        () => {
          return graph.connectionHandler.isEnabled();
        },
        (_checked) => {
          ui.actions.get("connectionPoints").funct();
        },
        {
          install: (apply) => {
            div.listener = () => {
              apply(graph.connectionHandler.isEnabled());
            };

            ui.addListener("connectionPointsChanged", listener);
          },
          destroy: () => {
            ui.removeListener(listener);
          },
        }
      )
    );
  }

  addConnectionArrows(div) {
    const { graph, ui } = this;
    const { listener } = div;
    // Connection arrows
    div.appendChild(
      this.createOption(
        mxResources.get("connectionArrows"),
        () => {
          return graph.connectionArrowsEnabled;
        },
        (_checked) => {
          ui.actions.get("connectionArrows").funct();
        },
        {
          install: (apply) => {
            div.listener = () => {
              apply(graph.connectionArrowsEnabled);
            };
            ui.addListener("connectionArrowsChanged", listener);
          },
          destroy: () => {
            ui.removeListener(listener);
          },
        }
      )
    );
  }

  addGuides(div) {
    const { graph, ui } = this;
    const { listener } = div;
    // Guides
    div.appendChild(
      this.createOption(
        mxResources.get("guides"),
        () => {
          return graph.graphHandler.guidesEnabled;
        },
        (_checked) => {
          ui.actions.get("guides").funct();
        },
        {
          install: (apply) => {
            div.listener = () => {
              apply(graph.graphHandler.guidesEnabled);
            };

            ui.addListener("guidesEnabledChanged", listener);
          },
          destroy: () => {
            ui.removeListener(listener);
          },
        }
      )
    );
  }
}
