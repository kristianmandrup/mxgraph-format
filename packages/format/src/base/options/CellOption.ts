import { FormatOption } from "./FormatOption";
import mx from "@mxgraph-app/mx";
const { mxEventObject, mxEvent, mxUtils } = mx;

export class CellOption extends FormatOption {
  label: any
  key: any
  defaultValue: any
  enabledValue: any
  disabledValue: any
  fn: any
  action: any
  stopEditing: any

  setEnabledValue(enabledValue) {
    this.enabledValue =
      enabledValue
        ? enabledValue == "null"
          ? null
          : enabledValue
        : "1";
  }

  setDisabledValue(disabledValue) {  
    this.disabledValue =
    disabledValue
      ? disabledValue == "null"
        ? null
        : disabledValue
      : "0";
  }


  /**
   * The string 'null' means use null in values.
   */
  createCellOption(
    label,
    key,
    defaultValue,
    enabledValue,
    disabledValue,
    fn?,
    action?,
    stopEditing?
  ) {
    const { setEnabledValue, setDisabledValue } = this
    this.label = label
    this.key = key
    this.defaultValue = defaultValue
    this.fn = fn
    this.action = action
    this.stopEditing = stopEditing
    setEnabledValue(enabledValue)
    setDisabledValue(disabledValue)

    const { getStateValue, listenManagement, onSelected } = this;

    return this.createOption(
      label,
      getStateValue,
      onSelected,
      listenManagement(this)
    );
  }

  listenManagement(ctx) {
    const { graph, key, defaultValue, disabledValue } = this
    return {
      install: function (apply) {
        ctx.listener = function () {
          // Seems to be null sometimes, not sure why...
          var state = graph.view.getState(graph.getSelectionCell());

          if (state != null) {
            apply(
              mxUtils.getValue(state.style, key, defaultValue) !=
                disabledValue
            );
          }
        };

        graph.getModel().addListener(mxEvent.CHANGE, ctx.listener);
      },
      destroy: function () {
        graph.getModel().removeListener(ctx.listener);
      },
    }    
  }

  onSelected = (checked) {
    const { stopEditing, action, enabledValue, disabledValue, fn, key, ui, graph } = this
    if (stopEditing) {
      graph.stopEditing();
    }

    if (action != null) {
      action.funct();
    } else {
      graph.getModel().beginUpdate();
      try {
        var value = checked ? enabledValue : disabledValue;
        graph.setCellStyles(key, value, graph.getSelectionCells());

        if (fn != null) {
          fn(graph.getSelectionCells(), value);
        }

        ui.fireEvent(
          new mxEventObject(
            "styleChanged",
            "keys",
            [key],
            "values",
            [value],
            "cells",
            graph.getSelectionCells()
          )
        );
      } finally {
        graph.getModel().endUpdate();
      }
    }
  }

  getStateValue() {
    const { graph, key, defaultValue, disabledValue } = this;
    // Seems to be null sometimes, not sure why...
    var state = graph.view.getState(graph.getSelectionCell());

    if (state != null) {
      return mxUtils.getValue(state.style, key, defaultValue) != disabledValue;
    }

    return null;
  }
}
