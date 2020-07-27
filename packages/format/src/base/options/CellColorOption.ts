import mx from "@mxgraph-app/mx";
const { mxEventObject, mxConstants, mxEvent, mxUtils } = mx;
import { ColorOption } from "./ColorOption";

export class CellColorOption extends ColorOption {
  setStyleFn: any;
  colorKey: any;
  defaultColor: any;
  callbackFn: any;
  label: any;

  create(label, colorKey, defaultColor, callbackFn, setStyleFn?) {
    this.label = label;
    this.setStyleFn = setStyleFn;
    this.colorKey = colorKey;
    this.defaultColor = defaultColor;
    this.callbackFn = callbackFn;
    const { onColor, getStateValue } = this;
    const { listenerManagement } = this;

    return this.createColorOption(
      label,
      getStateValue,
      onColor,
      defaultColor || mxConstants.NONE,
      listenerManagement(this),
      callbackFn
    );
  }

  getStateValue = () => {
    const { graph, colorKey } = this;
    // Seems to be null sometimes, not sure why...
    var state = graph.view.getState(graph.getSelectionCell());

    if (state) {
      return mxUtils.getValue(state.style, colorKey, null);
    }
    return null;
  };

  onColor = (color) => {
    const { graph, ui, setStyleFn, colorKey } = this;
    graph.getModel().beginUpdate();
    try {
      if (setStyleFn != null) {
        setStyleFn(color);
      }

      graph.setCellStyles(colorKey, color, graph.getSelectionCells());
      ui.fireEvent(
        new mxEventObject(
          "styleChanged",
          "keys",
          [colorKey],
          "values",
          [color],
          "cells",
          graph.getSelectionCells()
        )
      );
    } finally {
      graph.getModel().endUpdate();
    }
  };

  listenerManagement(ctx) {
    const { graph, colorKey } = this;
    return {
      install: function (apply) {
        ctx.listener = function () {
          // Seems to be null sometimes, not sure why...
          var state = graph.view.getState(graph.getSelectionCell());

          if (state != null) {
            apply(mxUtils.getValue(state.style, colorKey, null));
          }
        };

        graph.getModel().addListener(mxEvent.CHANGE, ctx.listener);
      },
      destroy: function () {
        graph.getModel().removeListener(ctx.listener);
      },
    };
  }
}
