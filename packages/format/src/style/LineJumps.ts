import { BaseStyleFormat } from "./BaseStyleFormat";
import mx from "@mxgraph-app/mx";
const { mxResources, mxUtils, mxEvent, mxEventObject } = mx;

export class LineJumps extends BaseStyleFormat {
  lineJumpsEnabled: any; // Graph.lineJumpsEnabled
  defaultJumpSize: any; // Graph.defaultJumpSize

  /**
   * Adds UI for configuring line jumps.
   */
  addLineJumps(container) {
    var ss = this.format.getSelectionState();

    if (
      this.lineJumpsEnabled &&
      ss.edges.length > 0 &&
      ss.vertices.length == 0 &&
      ss.lineJumps
    ) {
      container.style.padding = "8px 0px 24px 18px";

      var ui = this.editorUi;
      var editor = ui.editor;
      var graph = editor.graph;

      var span = document.createElement("div");
      span.style.position = "absolute";
      span.style.fontWeight = "bold";
      span.style.width = "80px";

      mxUtils.write(span, mxResources.get("lineJumps"));
      container.appendChild(span);

      var styleSelect = document.createElement("select");
      styleSelect.style.position = "absolute";
      styleSelect.style.marginTop = "-2px";
      styleSelect.style.right = "76px";
      styleSelect.style.width = "62px";

      var styles = ["none", "arc", "gap", "sharp"];

      for (var i = 0; i < styles.length; i++) {
        var styleOption = document.createElement("option");
        styleOption.setAttribute("value", styles[i]);
        mxUtils.write(styleOption, mxResources.get(styles[i]));
        styleSelect.appendChild(styleOption);
      }

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

      // Stops events from bubbling to color option event handler
      mxEvent.addListener(styleSelect, "click", (evt) => {
        mxEvent.consume(evt);
      });

      container.appendChild(styleSelect);

      var jumpSizeUpdate;

      var jumpSize = this.addUnitInput(container, "pt", 22, 33, () => {
        jumpSizeUpdate.apply(this, arguments);
      });

      jumpSizeUpdate = this.installInputHandler(
        jumpSize,
        "jumpSize",
        this.defaultJumpSize,
        0,
        999,
        " pt"
      );

      var listener = (_sender?, _evt?, force?) => {
        ss = this.format.getSelectionState();
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
      this.listeners.push({
        destroy: function () {
          graph.getModel().removeListener(listener);
        },
      });
      listener();
    } else {
      container.style.display = "none";
    }

    return container;
  }
}
