import mx from "../handler/style/node_modules/@mxgraph-app/mx";
import { TextFormatPanel } from "../TextFormatPanel";
import { PositionChangeListener } from "../listener";
import { UpdateCssHandler } from "../handler";
const { mxConstants, mxClient, mxResources, mxEvent, mxUtils } = mx;

export class Font extends TextFormatPanel {
  // NOTE: For automatic we use the value null since automatic
  // requires the text to be non formatted and non-wrapped
  get dirSet() {
    return {
      automatic: null,
      leftToRight: mxConstants.TEXT_DIRECTION_LTR,
      rightToLeft: mxConstants.TEXT_DIRECTION_RTL,
    };
  }

  get dirs() {
    return ["automatic", "leftToRight", "rightToLeft"];
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addFont(container) {
    var title = this.createContainerTitle();
    container.appendChild(title);

    this.stylePanel = this.createStylePanel();
    container.appendChild(this.stylePanel);

    if (mxClient.IS_QUIRKS) {
      mxUtils.br(container);
    }

    const { graph, stylePanel2, dirs, dirSet } = this;

    container.appendChild(stylePanel2);

    this.appendStylePanel3();

    // Hack for updating UI state below based on current text selection
    // currentTable is the current selected DOM table updated below
    this.updateUiOnCurrentTextSelection();

    // Label position
    var stylePanel4: any = this.createStylePanel4();

    // Adds label position options
    var positionSelect = this.createPositionSelect();

    stylePanel4.appendChild(positionSelect);

    // Writing direction
    var stylePanel5: any = this.createStylePanel5();

    // Adds writing direction options
    // LATER: Handle reselect of same option in all selects (change event
    // is not fired for same option so have opened state on click) and
    // handle multiple different styles for current selection
    var dirSelect = this.createDirSelect();

    for (var i = 0; i < dirs.length; i++) {
      var dirOption = document.createElement("option");
      dirOption.setAttribute("value", dirs[i]);
      mxUtils.write(dirOption, mxResources.get(dirs[i]));
      dirSelect.appendChild(dirOption);
    }

    stylePanel5.appendChild(dirSelect);

    if (!graph.isEditing()) {
      container.appendChild(stylePanel4);

      this.createPositionChangeListener().add();

      // LATER: Update dir in text editor while editing and update style with label
      // NOTE: The tricky part is handling and passing on the auto value
      container.appendChild(stylePanel5);

      mxEvent.addListener(dirSelect, "change", function (evt) {
        graph.setCellStyles(
          mxConstants.STYLE_TEXT_DIRECTION,
          dirSet[dirSelect.value],
          graph.getSelectionCells()
        );
        mxEvent.consume(evt);
      });
    }

    // Font size
    this.input = this.createFontSizeInput();
    const { input } = this;
    stylePanel2.appendChild(input);

    // Workaround for font size 4 if no text is selected is update font size below
    // after first character was entered (as the font element is lazy created)
    this.inputUpdate = this.createInputHandler();

    var stepper = this.createStyledStepper();

    stylePanel2.appendChild(stepper);

    const { panel, bgPanel, colorPanel, borderPanel } = this;

    colorPanel.appendChild(panel);
    colorPanel.appendChild(bgPanel);

    if (!graph.cellEditor.isContentEditing()) {
      colorPanel.appendChild(borderPanel);
    }

    container.appendChild(colorPanel);

    this.createExtraPanel();
    this.createSpacingSpanPanel();
    this.appendPanelToContainer();
    this.addKeyHandlers(input);
    const { listener } = this;

    graph.getModel().addListener(mxEvent.CHANGE, listener);
    this.listeners.push({
      destroy: function () {
        graph.getModel().removeListener(listener);
      },
    });
    listener();

    if (graph.cellEditor.isContentEditing()) {
      this.createUpdateCssHandler().create();
    }
    return container;
  }

  createUpdateCssHandler() {
    return new UpdateCssHandler(this.format, this.editorUi, this.container);
  }

  createPositionChangeListener() {
    return new PositionChangeListener(
      this.format,
      this.editorUi,
      this.container
    );
  }
}
