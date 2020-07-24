import mx from "@mxgraph-app/mx";
const { mxEvent } = mx;

export class GraphUpdater {
  fPanel: any;
  graph: any;
  input: any;

  formatPanel: any;
  evt: any;

  constructor(formatPanel, evt) {
    this.formatPanel = formatPanel;
    this.evt = evt;
  }

  get value() {
    const { fPanel, input } = this;
    var value = fPanel.isFloatUnit()
      ? parseFloat(input.value)
      : parseInt(input.value);
    value = fPanel.fromUnit(
      Math.max(fPanel.inUnit(1), isNaN(value) ? fPanel.inUnit(10) : value)
    );
    return value;
  }

  setGridSize() {
    const { graph, value } = this;
    if (value != graph.getGridSize()) {
      graph.setGridSize(value);
    }
  }

  setInputValue() {
    const { fPanel, input, value } = this;
    input.value = fPanel.inUnit(value) + " " + fPanel.getUnit();
  }

  update() {
    const { setGridSize, setInputValue, evt } = this;
    setGridSize();
    setInputValue();
    mxEvent.consume(evt);
  }
}
