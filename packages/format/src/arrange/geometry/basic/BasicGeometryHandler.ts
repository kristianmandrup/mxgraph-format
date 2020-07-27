import { BasicManager } from "./BasicManager";
import mx from "@mxgraph-app/mx";
const { mxEvent } = mx;

export class BasicGeometryHandler extends BasicManager {
  initialValue: any;
  input: any;
  fn: any;
  value: any;
  /**
   *
   */
  addGeometryHandler(input, fn) {
    this.input = input;
    this.fn = fn;
    const { update } = this;
    mxEvent.addListener(input, "blur", update);
    mxEvent.addListener(input, "change", update);
    mxEvent.addListener(input, "focus", () => {
      this.initialValue = input.value;
    });

    return update;
  }

  update = (evt) => {
    const { onValidInput } = this;
    onValidInput();
    mxEvent.consume(evt);
  };

  get isValidInput() {
    return this.input.value !== "";
  }

  onInvalidValue() {
    const { isValidValue, resetInputValue } = this;
    if (isValidValue) return;
    resetInputValue();
    return true;
  }

  get defaultInputValue() {
    return this.initialValue + " " + this.panel.getUnit();
  }

  resetInputValue() {
    this.input.value = this.defaultInputValue;
  }

  get isValidValue() {
    return !isNaN(this.value);
  }

  setValue() {
    this.value = parseFloat(this.input.value);
  }

  get isChangedValue() {
    return this.value != this.initialValue;
  }

  onChangedValue() {
    const { isChangedValue, updateInputValue } = this;
    if (!isChangedValue) return;
    updateInputValue();
  }

  onValidInput() {
    const { setValue, isValidInput, onInvalidValue, onChangedValue } = this;
    if (!isValidInput) return;

    setValue();
    onInvalidValue() || onChangedValue();
  }

  updateInputValue() {
    const { graph, processCells, value, input, panel } = this;
    graph.getModel().beginUpdate();
    try {
      processCells();
    } finally {
      graph.getModel().endUpdate();
    }

    this.initialValue = value;
    input.value = value + " " + panel.getUnit();
  }

  get cells() {
    return this.graph.getSelectionCells();
  }

  processCells() {
    const { graph, fn, value, cells } = this;
    for (let cell of cells) {
      if (graph.getModel().isVertex(cell)) {
        var geo = graph.getCellGeometry(cell);

        if (geo != null) {
          geo = geo.clone();
          fn(geo, value);

          var state = graph.view.getState(cell);

          if (state != null && graph.isRecursiveVertexResize(state)) {
            graph.resizeChildCells(cell, geo);
          }

          graph.getModel().setGeometry(cell, geo);
          graph.constrainChildCells(cell);
        }
      }
    }
  }
}
