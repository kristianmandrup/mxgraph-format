import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../../base";
import { comicShapes, roundableShapes } from "../shapes";
const { mxConstants, mxUtils } = mx;

export class StateChecker extends BaseFormatPanel {
  roundableShapes = roundableShapes;
  /**
   * Returns information about the current selection.
   */
  isFillState(state) {
    return (
      state.view.graph.model.isVertex(state.cell) ||
      mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null) == "arrow" ||
      mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null) ==
        "filledEdge" ||
      mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null) ==
        "flexArrow"
    );
  }

  /**
   * Returns information about the current selection.
   */
  isGlassState(state) {
    var shape = mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null);

    return (
      shape == "label" ||
      shape == "rectangle" ||
      shape == "internalStorage" ||
      shape == "ext" ||
      shape == "umlLifeline" ||
      shape == "swimlane" ||
      shape == "process"
    );
  }

  /**
   * Returns information about the current selection.
   */
  isRoundedState(state) {
    return state.shape != null
      ? state.shape.isRoundable()
      : mxUtils.indexOf(
          this.roundableShapes,
          mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null)
        ) >= 0;
  }

  /**
   * Returns information about the current selection.
   */
  isLineJumpState(state) {
    var shape = mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null);
    var curved = mxUtils.getValue(state.style, mxConstants.STYLE_CURVED, false);

    return !curved && (shape == "connector" || shape == "filledEdge");
  }

  /**
   * Returns information about the current selection.
   */
  isComicState(state) {
    var shape = mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null);

    return mxUtils.indexOf(comicShapes, shape) >= 0;
  }

  /**
   * Returns information about the current selection.
   */
  isAutoSizeState(state) {
    return (
      mxUtils.getValue(state.style, mxConstants.STYLE_AUTOSIZE, null) == "1"
    );
  }

  /**
   * Returns information about the current selection.
   */
  isImageState(state) {
    var shape = mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null);

    return shape == "label" || shape == "image";
  }

  /**
   * Returns information about the current selection.
   */
  isShadowState(state) {
    var shape = mxUtils.getValue(state.style, mxConstants.STYLE_SHAPE, null);

    return shape != "image";
  }
}
