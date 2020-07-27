import mx from "@mxgraph-app/mx";
import { BasicManager } from "./basic";
const { mxEvent } = mx;

export class BaseHandler extends BasicManager {
  input: any;
  initialValue: any;
  fn: any;
  value: any;

  get isValidInput() {
    return this.input.value !== "";
  }

  addHandler(input, fn) {
    const { update } = this;
    this.input = input;
    this.fn = fn;

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

  processCells() {}
}
