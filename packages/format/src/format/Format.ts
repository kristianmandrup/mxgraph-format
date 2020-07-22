import mx from "@mxgraph-app/mx";
import { Unit } from "./Unit";
import { roundableShapes } from "./shapes";
import { SelectionStateUpdater } from "./selection-state/SelectionStateUpdater";
const { mxEvent } = mx;

/**
 * Copyright (c) 2006-2012, JGraph Ltd
 */
export class Format extends Unit {
  editorUi: any;
  format: any;
  container: any;
  documentMode: any;
  selectionState: any;
  panels: any;

  constructor(editorUi, container) {
    super(editorUi, container);
  }

  /**
   * Returns information about the current selection.
   */
  labelIndex = 0;

  /**
   * Returns information about the current selection.
   */
  currentIndex = 0;

  /**
   * Returns information about the current selection.
   */
  showCloseButton = true;

  /**
   * Background color for inactive tabs.
   */
  inactiveTabBackgroundColor = "#f1f3f4";

  /**
   * Background color for inactive tabs.
   */
  roundableShapes = roundableShapes;

  update(_sender?, _evt?) {
    this.clearSelectionState();
    this.refresh();
  }

  refresh() {
    // use refresher?
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  init() {
    var ui = this.editorUi;
    var editor = ui.editor;
    var graph = editor.graph;

    graph.getSelectionModel().addListener(mxEvent.CHANGE, this.update);
    graph.addListener(mxEvent.EDITING_STARTED, this.update);
    graph.addListener(mxEvent.EDITING_STOPPED, this.update);
    graph.getModel().addListener(mxEvent.CHANGE, this.update);
    graph.addListener(mxEvent.ROOT, () => {
      this.refresh();
    });

    editor.addListener("autosaveChanged", () => {
      this.refresh();
    });

    this.refresh();
  }

  /**
   * Returns information about the current selection.
   */
  clearSelectionState() {
    this.selectionState = null;
  }

  /**
   * Returns information about the current selection.
   */
  getSelectionState() {
    if (!this.selectionState) {
      this.selectionState = this.createSelectionState();
    }
    return this.selectionState;
  }

  /**
   * Returns information about the current selection.
   */
  createSelectionState() {
    var cells = this.editorUi.editor.graph.getSelectionCells();
    var result = this.initSelectionState();

    cells.map((cell) => {
      this.updateSelectionStateForCell(result, cell, cells);
    });

    return result;
  }

  /**
   * Returns information about the current selection.
   */
  initSelectionState() {
    return {
      vertices: [],
      edges: [],
      x: null,
      y: null,
      width: null,
      height: null,
      style: {},
      containsImage: false,
      containsLabel: false,
      fill: true,
      glass: true,
      rounded: true,
      comic: true,
      autoSize: false,
      image: true,
      shadow: true,
      lineJumps: true,
    };
  }

  /**
   * Returns information about the current selection.
   */
  updateSelectionStateForCell(result, cell, cells?) {
    new SelectionStateUpdater(
      this.format,
      this.editorUi,
      this.container
    ).updateSelectionStateForCell(result, cell, cells);
    return this;
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  clear() {
    this.container.innerHTML = "";

    // Destroy existing panels
    if (this.panels) {
      for (var i = 0; i < this.panels.length; i++) {
        this.panels[i].destroy();
      }
    }

    this.panels = [];
    return this;
  }
}
