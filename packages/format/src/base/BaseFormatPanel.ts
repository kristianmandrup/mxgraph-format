import mx from "@mxgraph-app/mx";
import { Buttons } from "./Buttons";
import { InputHandlerInstaller } from "./InputHandlerInstaller";
import { Stepper } from "./Stepper";
import { Base } from "./Base";
import { FormatOption } from "./options/FormatOption";
import { CellOption } from "./options/CellOption";
import { CellColorOption } from "./options/CellColorOption";
import { ColorOption } from "./options/ColorOption";
import { Arrow } from "./Arrow";
import { RelativeOption } from "./options/RelativeOption";
import { SelectionState } from "./SelectionState";
const { mxUtils, mxResources } = mx;

/**
 * Base class for format panels.
 */
export class BaseFormatPanel extends Base {
  selection: any;
  buttons: Buttons;
  format: any;
  editorUi: any;
  container: any;
  listeners: any[] = [];
  panels: any[] = [];
  documentMode: any;

  constructor(format, editorUi, container) {
    super(format, editorUi, container);
    this.buttons = new Buttons();
  }

  write(target, text) {
    mxUtils.write(target, text);
  }

  createBtn(label, fn) {
    return mxUtils.button(label, fn);
  }

  createBreak(elem) {
    mxUtils.br(elem);
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

  get cellEditor() {
    return this.editor.cellEditor;
  }

  get menus() {
    return this.editor.menus;
  }

  get toolbar() {
    return this.editor.toolbar;
  }

  get actions() {
    return this.editor.actions;
  }

  get hasEdges() {
    const { ss } = this;
    return ss.edges.length >= 0;
  }

  get hasVertices() {
    return this.ss.vertices.length > 0;
  }

  resource(name) {
    return mxResources.get(name);
  }

  get graph() {
    return this.editor.graph;
  }

  /**
   *
   */
  buttonBackgroundColor = "white";

  /**
   * Adds the given color option.
   */
  getSelectionState() {
    return this.newSelectionState().getState();
  }

  newSelectionState() {
    const { editorUi, format, container } = this;
    return new SelectionState(format, editorUi, container);
  }

  /**
   * Install input handler.
   */
  installInputHandler(
    input,
    key,
    defaultValue,
    min,
    max,
    unit,
    textEditFallback?,
    isFloat?
  ) {
    return this.createInputHandlerInstaller().install(
      input,
      key,
      defaultValue,
      min,
      max,
      unit,
      textEditFallback,
      isFloat
    );
  }

  createInputHandlerInstaller() {
    return new InputHandlerInstaller(
      this.format,
      this.editorUi,
      this.container
    );
  }

  /**
   * Adds the given option.
   */
  createTitle(title) {
    var div = document.createElement("div");
    div.style.padding = "0px 0px 6px 0px";
    div.style.whiteSpace = "nowrap";
    div.style.overflow = "hidden";
    div.style.width = "200px";
    div.style.fontWeight = "bold";
    mxUtils.write(div, title);

    return div;
  }

  /**
   *
   */
  createStepper(
    input,
    update,
    step,
    height,
    disableFocus?,
    defaultValue?,
    isFloat?
  ) {
    return this.newStepper().create(
      input,
      update,
      step,
      height,
      disableFocus,
      defaultValue,
      isFloat
    );
  }

  newStepper() {
    const { editorUi, format, container } = this;
    return new Stepper(format, editorUi, container);
  }

  /**
   * Adds the given option.
   */
  createOption(label, isCheckedFn, setCheckedFn, listener) {
    const { editorUi, format, container } = this;
    return new FormatOption(format, editorUi, container).createOption(
      label,
      isCheckedFn,
      setCheckedFn,
      listener
    );
  }

  /**
   * The string 'null' means use null in values.
   */
  createCellOption(
    label,
    key,
    defaultValue?,
    enabledValue?,
    disabledValue?,
    fn?,
    action?,
    stopEditing?
  ) {
    return this.newCellOption().createCellOption(
      label,
      key,
      defaultValue,
      enabledValue,
      disabledValue,
      fn,
      action,
      stopEditing
    );
  }

  newCellOption() {
    return new CellOption(this.format, this.editorUi, this.container);
  }

  /**
   * Adds the given color option.
   */
  createColorOption(
    label,
    getColorFn,
    setColorFn,
    defaultColor,
    listener,
    callbackFn?,
    hideCheckbox?
  ) {
    return this.newColorOption().createColorOption(
      label,
      getColorFn,
      setColorFn,
      defaultColor,
      listener,
      callbackFn,
      hideCheckbox
    );
  }

  newColorOption() {
    return new ColorOption(this.format, this.editorUi, this.container);
  }

  /**
   *
   */
  createCellColorOption(
    label,
    colorKey,
    defaultColor?,
    callbackFn?,
    setStyleFn?
  ) {
    return this.newCellColorOption().create(
      label,
      colorKey,
      defaultColor,
      callbackFn,
      setStyleFn
    );
  }

  newCellColorOption() {
    return new CellColorOption(this.format, this.editorUi, this.container);
  }

  /**
   *
   */
  addArrow(elt, height?) {
    return new Arrow().add(elt, height);
  }

  /**
   *
   */
  createRelativeOption(label, key, width?, handler?, init?) {
    return this.newRelativeOption().create(label, key, width, handler, init);
  }

  newRelativeOption() {
    const { format, editorUi, container } = this;
    return new RelativeOption(format, editorUi, container);
  }

  styleButtons(elements) {
    this.buttons.style(elements);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  destroy() {
    if (this.listeners != null) {
      for (var i = 0; i < this.listeners.length; i++) {
        this.listeners[i].destroy();
      }
      this.listeners = [];
    }
  }
}
