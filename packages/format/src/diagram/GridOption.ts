import mx from "../text/handler/style/node_modules/@mxgraph-app/mx";
import { BaseFormatPanel } from "../base";
const { mxEventObject, mxResources, mxConstants, mxClient, mxEvent } = mx;

export class GridOption extends BaseFormatPanel {
  formatPanel: any;
  editorUi: any;

  getUnit: any;
  inUnit: any;
  createStepper: any;
  createColorOption: any;
  getUnitStep: any;
  isFloatUnit: any;
  listeners: any[] = [];

  container: any;

  constructor(format, formatPanel, container) {
    super(format, formatPanel.editorUi, container);
    this.formatPanel = formatPanel;
  }

  update() {
    this.formatPanel.update();
  }
  /**
   *
   */
  add() {
    const { container } = this;
    var fPanel: any = this;
    var ui = this.editorUi;
    var graph = ui.editor.graph;

    var input = document.createElement("input");
    input.style.position = "absolute";
    input.style.textAlign = "right";
    input.style.width = "38px";
    input.value = this.inUnit(graph.getGridSize()) + " " + this.getUnit();

    var stepper = this.createStepper(
      input,
      this.update,
      this.getUnitStep(),
      null,
      null,
      null,
      this.isFloatUnit()
    );
    input.style.display = graph.isGridEnabled() ? "" : "none";
    stepper.style.display = input.style.display;

    mxEvent.addListener(input, "keydown", function (e) {
      if (e.keyCode == 13) {
        graph.container.focus();
        mxEvent.consume(e);
      } else if (e.keyCode == 27) {
        input.value = graph.getGridSize();
        graph.container.focus();
        mxEvent.consume(e);
      }
    });

    mxEvent.addListener(input, "blur", this.update);
    mxEvent.addListener(input, "change", this.update);

    var unitChangeListener = function (_sender, _evt) {
      input.value = fPanel.inUnit(graph.getGridSize()) + " " + fPanel.getUnit();
      fPanel.format.refresh();
    };

    graph.view.addListener("unitChanged", unitChangeListener);
    this.listeners.push({
      destroy: function () {
        graph.view.removeListener(unitChangeListener);
      },
    });

    if (mxClient.IS_SVG) {
      input.style.marginTop = "-2px";
      input.style.right = "84px";
      stepper.style.marginTop = "-16px";
      stepper.style.right = "72px";

      var panel = this.createColorOption(
        mxResources.get("grid"),
        () => {
          var color = graph.view.gridColor;

          return graph.isGridEnabled() ? color : null;
        },
        (color) => {
          var enabled = graph.isGridEnabled();

          if (color == mxConstants.NONE) {
            graph.setGridEnabled(false);
          } else {
            graph.setGridEnabled(true);
            ui.setGridColor(color);
          }

          input.style.display = graph.isGridEnabled() ? "" : "none";
          stepper.style.display = input.style.display;

          if (enabled != graph.isGridEnabled()) {
            ui.fireEvent(new mxEventObject("gridEnabledChanged"));
          }
        },
        "#e0e0e0",
        {
          install: function (apply) {
            this.listener = function () {
              apply(graph.isGridEnabled() ? graph.view.gridColor : null);
            };

            ui.addListener("gridColorChanged", this.listener);
            ui.addListener("gridEnabledChanged", this.listener);
          },
          destroy: function () {
            ui.removeListener(this.listener);
          },
        }
      );

      panel.appendChild(input);
      panel.appendChild(stepper);
      container.appendChild(panel);
    } else {
      input.style.marginTop = "2px";
      input.style.right = "32px";
      stepper.style.marginTop = "2px";
      stepper.style.right = "20px";

      container.appendChild(input);
      container.appendChild(stepper);

      container.appendChild(
        this.createOption(
          mxResources.get("grid"),
          function () {
            return graph.isGridEnabled();
          },
          function (checked) {
            graph.setGridEnabled(checked);

            if (graph.isGridEnabled()) {
              graph.view.gridColor = "#e0e0e0";
            }

            ui.fireEvent(new mxEventObject("gridEnabledChanged"));
          },
          {
            install: function (apply) {
              this.listener = function () {
                input.style.display = graph.isGridEnabled() ? "" : "none";
                stepper.style.display = input.style.display;

                apply(graph.isGridEnabled());
              };

              ui.addListener("gridEnabledChanged", this.listener);
            },
            destroy: function () {
              ui.removeListener(this.listener);
            },
          }
        )
      );
    }
  }
}
