import mx from "@mxgraph-app/mx";
import { UnitInput } from "./UnitInput";
import { Unit } from "../format/Unit";
const { mxEvent, mxUtils } = mx;

export class Base extends Unit {
  format: any;
  editorUi: any;
  container: any;
  listeners: any[] = [];
  documentMode: any;

  constructor(format, editorUi, container?) {
    super(editorUi, container);
    this.format = format;
    this.listeners = [];
  }

  /**
   *
   */
  addUnitInput(
    container,
    unit,
    right,
    width,
    update,
    step?,
    marginTop?,
    disableFocus?,
    isFloat?
  ) {
    return this.newUnitInput().add(
      container,
      unit,
      right,
      width,
      update,
      step,
      marginTop,
      disableFocus,
      isFloat
    );
  }

  newUnitInput() {
    const { format, editorUi, container } = this;
    return new UnitInput(format, editorUi, container);
  }

  /**
   *
   */
  addKeyHandler(input, listener) {
    const { onPressEnter, onPressEscape } = this;
    mxEvent.addListener(input, "keydown", (e) => {
      onPressEnter(e) || onPressEscape(e, listener);
    });
  }

  get graphContainer() {
    return this.editorUi.editor.graph.container;
  }

  onPressEnter(e) {
    if (e.keyCode !== 13) return;
    this.graphContainer.focus();
    mxEvent.consume(e);
    return true;
  }

  onPressEscape(e, listener) {
    if (e.keyCode !== 27) return;
    listener && listener(null, null, true);
    this.graphContainer.focus();
    mxEvent.consume(e);
  }

  /**
   *
   */
  addLabel(div, title, right, width?) {
    width = width != null ? width : 61;

    var label = document.createElement("div");
    mxUtils.write(label, title);
    label.style.position = "absolute";
    label.style.right = right + "px";
    label.style.width = width + "px";
    label.style.marginTop = "6px";
    label.style.textAlign = "center";
    div.appendChild(label);
  }

  /**
   * Adds the given option.
   */
  createPanel() {
    var div = document.createElement("div");
    div.className = "geFormatSection";
    div.style.padding = "12px 0px 12px 18px";

    return div;
  }

  get ui() {
    return this.editorUi;
  }

  get ss() {
    return this.format.getSelectionState();
  }

  get editor() {
    return this.editorUi.editor;
  }

  get graph() {
    return this.editor.graph;
  }
}
