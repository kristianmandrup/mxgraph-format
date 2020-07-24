import { BaseStyleFormat } from "./BaseStyleFormat";
import mx from "../text/handler/style/node_modules/@mxgraph-app/mx";
const { mxResources, mxUtils, mxEvent, mxEventObject } = mx;

export class LineJumps extends BaseStyleFormat {
  lineJumpsEnabled: any; // Graph.lineJumpsEnabled
  defaultJumpSize: any; // Graph.defaultJumpSize

  jumpSize: any;
  styleSelect: any;

  listener: any;

  /**
   * Adds UI for configuring line jumps.
   */
  addLineJumps(container) {
    const { enableLineJumps, disableLineJumps } = this;
    enableLineJumps() || disableLineJumps();

    return container;
  }

  disableLineJumps() {
    if (this.shouldEnableLinejumps) return;
    this.container.style.display = "none";
    return true;
  }

  get shouldEnableLinejumps() {
    const { ss } = this;
    return (
      this.lineJumpsEnabled &&
      ss.edges.length > 0 &&
      ss.vertices.length == 0 &&
      ss.lineJumps
    );
  }

  appendTitle() {
    const { container } = this;
    const span = document.createElement("div");
    span.style.position = "absolute";
    span.style.fontWeight = "bold";
    span.style.width = "80px";

    mxUtils.write(span, mxResources.get("lineJumps"));
    container.appendChild(span);
  }

  createStyleSelect() {
    const styleSelect = document.createElement("select");
    styleSelect.style.position = "absolute";
    styleSelect.style.marginTop = "-2px";
    styleSelect.style.right = "76px";
    styleSelect.style.width = "62px";
    this.styleSelect = styleSelect;
    return styleSelect;
  }

  addStyleSelectOptions() {
    const { styleSelect } = this;
    var styles = ["none", "arc", "gap", "sharp"];
    for (var i = 0; i < styles.length; i++) {
      var styleOption = document.createElement("option");
      styleOption.setAttribute("value", styles[i]);
      mxUtils.write(styleOption, mxResources.get(styles[i]));
      styleSelect.appendChild(styleOption);
    }
  }

  styleContainer() {
    this.container.style.padding = "8px 0px 24px 18px";
  }

  addStyleSelectChangeHandler() {
    const { styleSelect, graph, ui } = this;
    mxEvent.addListener(styleSelect, "change", function (evt) {
      graph.getModel().beginUpdate();
      try {
        graph.setCellStyles(
          "jumpStyle",
          styleSelect.value,
          graph.getSelectionCells()
        );
        ui.fireEvent(
          new mxEventObject(
            "styleChanged",
            "keys",
            ["jumpStyle"],
            "values",
            [styleSelect.value],
            "cells",
            graph.getSelectionCells()
          )
        );
      } finally {
        graph.getModel().endUpdate();
      }

      mxEvent.consume(evt);
    });
  }

  addStyleSelectClickHandler() {
    const { styleSelect } = this;
    // Stops events from bubbling to color option event handler
    mxEvent.addListener(styleSelect, "click", (evt) => {
      mxEvent.consume(evt);
    });
  }

  addStyleSelectHandlers() {
    const { addStyleSelectChangeHandler, addStyleSelectClickHandler } = this;
    addStyleSelectChangeHandler();
    addStyleSelectClickHandler();
  }

  appendStyleSelect() {
    const {
      createStyleSelect,
      addStyleSelectOptions,
      addStyleSelectHandlers,
    } = this;
    createStyleSelect();
    addStyleSelectOptions();
    addStyleSelectHandlers();

    this.container.appendChild(this.styleSelect);
  }

  createJumpSize() {
    const { container } = this;
    let jumpSizeUpdate;
    const jumpSize = this.addUnitInput(container, "pt", 22, 33, () => {
      jumpSizeUpdate.apply(this, arguments);
    });
    this.jumpSize = jumpSize;

    jumpSizeUpdate = this.installInputHandler(
      jumpSize,
      "jumpSize",
      this.defaultJumpSize,
      0,
      999,
      " pt"
    );
  }

  addListener() {
    const { ss, styleSelect, jumpSize, graph } = this;
    const listener = (_sender?, _evt?, force?) => {
      styleSelect.value = mxUtils.getValue(ss.style, "jumpStyle", "none");

      if (force || document.activeElement != jumpSize) {
        var tmp = parseInt(
          mxUtils.getValue(ss.style, "jumpSize", this.defaultJumpSize)
        );
        jumpSize.value = isNaN(tmp) ? "" : tmp + " pt";
      }
    };

    this.addKeyHandler(jumpSize, listener);

    graph.getModel().addListener(mxEvent.CHANGE, listener);
  }

  registerListner() {
    const { listeners, listener, graph } = this;
    listeners.push({
      destroy: function () {
        graph.getModel().removeListener(listener);
      },
    });
  }

  enableLineJumps() {
    const { shouldEnableLinejumps } = this;
    if (shouldEnableLinejumps) return;
    const {
      styleContainer,
      appendTitle,
      appendStyleSelect,
      createJumpSize,
      addListener,
    } = this;
    styleContainer();
    appendTitle();
    appendStyleSelect();
    createJumpSize();
    addListener();

    this.listener();

    return true;
  }
}
