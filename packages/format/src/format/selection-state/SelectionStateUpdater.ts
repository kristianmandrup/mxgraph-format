import mx from "../../text/handler/style/node_modules/@mxgraph-app/mx";
import { BaseFormatPanel } from "../../base";
import { StateChecker } from "./StateChecker";
const { mxConstants, mxUtils } = mx;

export class SelectionStateUpdater extends BaseFormatPanel {
  cell: any;
  result: any;
  cells: any;
  geo: any;

  stateChecker: any;

  constructor(format, editorUi, container) {
    super(format, editorUi, container);
    this.stateChecker = new StateChecker(format, editorUi, container);
  }

  isVertex(cell) {
    return this.graph.getModel().isVertex(cell);
  }

  onVertexCell() {
    const { isVertex, graph, cell, result } = this;
    if (!isVertex(cell)) return;
    result.vertices.push(cell);
    var geo = graph.getCellGeometry(cell);
    if (!geo) return;

    const { adjustWidth, adjustHeight, adjustOffset } = this;
    adjustWidth();
    adjustHeight();
    adjustOffset();

    return true;
  }

  get hasWidth() {
    return this.geo.width > 0;
  }

  adjustWidth() {
    const { geo, result, hasWidth } = this;
    if (hasWidth) {
      if (result.width == null) {
        result.width = geo.width;
      } else if (result.width != geo.width) {
        result.width = "";
      }
    } else {
      result.containsLabel = true;
    }
  }

  get hasHeight() {
    return this.geo.height > 0;
  }

  adjustHeight() {
    const { geo, result, hasHeight } = this;
    if (hasHeight) {
      if (result.height == null) {
        result.height = geo.height;
      } else if (result.height != geo.height) {
        result.height = "";
      }
    } else {
      result.containsLabel = true;
    }
  }

  get shouldAdjustOffset() {
    const { geo } = this;
    return !geo.relative || geo.offset;
  }

  adjustOffset() {
    const { shouldAdjustOffset, result, geo } = this;
    if (!shouldAdjustOffset) return;
    var x = geo.relative ? geo.offset.x : geo.x;
    var y = geo.relative ? geo.offset.y : geo.y;

    if (result.x == null) {
      result.x = x;
    } else if (result.x != x) {
      result.x = "";
    }

    if (result.y == null) {
      result.y = y;
    } else if (result.y != y) {
      result.y = "";
    }
  }

  isEdgeCell(cell) {
    return this.graph.getModel().isEdge(cell);
  }

  onEdgeCell() {
    const { isEdgeCell, cell, result } = this;
    if (!isEdgeCell(cell)) return;
    result.edges.push(cell);
    return true;
  }

  /**
   * Returns information about the current selection.
   */
  updateSelectionStateForCell(result, cell, cells) {
    this.result = result;
    this.cell = cell;
    this.cells = cells;

    const { onVertexCell, onEdgeCell, setResult } = this;
    onVertexCell() || onEdgeCell();

    const { graph } = this;
    var state = graph.view.getState(cell);

    if (!state) return;
    setResult(state);
  }

  setResult(state) {
    const { result, stateChecker } = this;
    const {
      isAutoSizeState,
      isGlassState,
      isRoundedState,
      isLineJumpState,
      isComicState,
      isImageState,
      isShadowState,
      isFillState,
    } = stateChecker;

    result.autoSize = result.autoSize || isAutoSizeState(state);
    result.glass = result.glass && isGlassState(state);
    result.rounded = result.rounded && isRoundedState(state);
    result.lineJumps = result.lineJumps && isLineJumpState(state);
    result.comic = result.comic && isComicState(state);
    result.image = result.image && isImageState(state);
    result.shadow = result.shadow && isShadowState(state);
    result.fill = result.fill && isFillState(state);

    var shape = mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null);
    result.containsImage = result.containsImage || shape == "image";

    for (var key in state.style) {
      var value = state.style[key];

      if (value != null) {
        if (result.style[key] == null) {
          result.style[key] = value;
        } else if (result.style[key] != value) {
          result.style[key] = "";
        }
      }
    }
  }
}
