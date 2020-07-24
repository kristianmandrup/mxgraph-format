import mx from "./handler/style/node_modules/@mxgraph-app/mx";
import { BaseFormatPanel } from "../base";
import {
  ContainerPanel,
  ExtraPanel,
  FontColorPanel,
  BackgroundPanel,
} from "./panels";
import { InputHandler } from "./handler";
import { TextFormatListener } from "./listener";
import { ToolbarFormatButtons } from "./buttons";
import { Font } from "./font";
const { mxConstants, mxClient, mxResources, mxUtils } = mx;

const panelMap = {
  background: BackgroundPanel,
  extra: ExtraPanel,
  fontColor: FontColorPanel,
  container: ContainerPanel,
};

const defaults = {
  panelMap,
};

/**
 * Adds the label menu items to the given menu and parent.
 */
export class TextFormatPanel extends BaseFormatPanel {
  ctrlKey: any; // Editor.ctrlKey
  // selection: any; // document.selection
  // documentMode: any; // document.documentMode
  panelMap = defaults.panelMap;

  protected _spacingPanel: any;
  protected _fontStyleItems: any;
  protected _bottomSpacing: any;
  protected _stylePanel2: any;
  protected _stylePanel3: any;

  stylePanel: any;
  input: any;
  inputUpdate: any;
  cssMenu: any;
  cssPanel: any;
  full: any;

  /**
   * Sets the default font family and size
   */
  defaultFont = "Helvetica";
  defaultFontSize = "12";

  toolbarFormatButtons: ToolbarFormatButtons;

  constructor(format, editorUi, container) {
    super(format, editorUi, container);
    this.toolbarFormatButtons = this.createToolbarFormatButtons();
    this.init();
  }

  get editor() {
    return this.editorUi.editor;
  }

  get graph() {
    return this.editor.graph;
  }

  get toolbar() {
    return this.editorUi.toolbar;
  }

  get menus() {
    return this.editorUi.menus;
  }

  get cellEditor() {
    return this.graph.cellEditor;
  }

  get ss() {
    return this.format.getSelectionState();
  }

  get colorPanel() {
    return this.createColorPanel();
  }

  get fontMenu() {
    return this.createFontMenu();
  }

  get arrow() {
    const { fontMenu } = this;
    const arrow = fontMenu.getElementsByTagName("div")[0];
    arrow.style.cssFloat = "right";
    return arrow;
  }

  get bgPanel() {
    return this.createBgPanel();
  }

  get borderPanel() {
    return this.createBorderPanel();
  }

  get panel() {
    return this.createFontColorPanel();
  }

  get top() {
    const { callFn, stylePanel3, resource, toolbar, menus } = this;
    return toolbar.addButton(
      "geSprite-top",
      resource("top"),
      callFn(
        menus.createStyleChangeFunction(
          [mxConstants.STYLE_VERTICAL_ALIGN],
          [mxConstants.ALIGN_TOP]
        )
      ),
      stylePanel3
    );
  }

  get middle() {
    const { callFn, stylePanel3, resource, toolbar, menus } = this;
    return toolbar.addButton(
      "geSprite-middle",
      resource("middle"),
      callFn(
        menus.createStyleChangeFunction(
          [mxConstants.STYLE_VERTICAL_ALIGN],
          [mxConstants.ALIGN_MIDDLE]
        )
      ),
      stylePanel3
    );
  }

  get bottom() {
    const { callFn, stylePanel3, toolbar, menus } = this;
    return toolbar.addButton(
      "geSprite-bottom",
      mxResources.get("bottom"),
      callFn(
        menus.createStyleChangeFunction(
          [mxConstants.STYLE_VERTICAL_ALIGN],
          [mxConstants.ALIGN_BOTTOM]
        )
      ),
      stylePanel3
    );
  }

  get directions() {
    return [
      "topLeft",
      "top",
      "topRight",
      "left",
      "center",
      "right",
      "bottomLeft",
      "bottom",
      "bottomRight",
    ];
  }

  createToolbarFormatButtons(): any {
    return new ToolbarFormatButtons(this.editorUi);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  init() {
    this.container.style.borderBottom = "none";
    this.addFont(this.container);
    return this;
  }

  listener = () => {
    return new TextFormatListener().listener;
  };

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addFont(container) {
    return new Font(this.format, this.editorUi, this.container).addFont(
      container
    );
  }

  createBorderPanel() {
    const borderPanel = this.createCellColorOption(
      mxResources.get("borderColor"),
      mxConstants.STYLE_LABEL_BORDERCOLOR,
      "#000000"
    );
    borderPanel.style.fontWeight = "bold";
    return borderPanel;
  }

  createPositionSelect() {
    const { directions, resource } = this;
    const positionSelect = document.createElement("select");
    positionSelect.style.position = "absolute";
    positionSelect.style.right = "20px";
    positionSelect.style.width = "97px";
    positionSelect.style.marginTop = "-2px";

    directions.map((direction) => {
      var positionOption = document.createElement("option");
      positionOption.setAttribute("value", direction);
      mxUtils.write(positionOption, resource(direction));
      positionSelect.appendChild(positionOption);
    });
    return positionSelect;
  }

  createStylePanel4() {
    const stylePanel4 = this.stylePanel.cloneNode(false);
    stylePanel4.style.marginLeft = "0px";
    stylePanel4.style.paddingTop = "8px";
    stylePanel4.style.paddingBottom = "4px";
    stylePanel4.style.fontWeight = "normal";

    mxUtils.write(stylePanel4, mxResources.get("position"));
    return stylePanel4;
  }

  createStylePanel5() {
    const stylePanel5 = this.stylePanel.cloneNode(false);
    stylePanel5.style.marginLeft = "0px";
    stylePanel5.style.paddingTop = "4px";
    stylePanel5.style.paddingBottom = "4px";
    stylePanel5.style.fontWeight = "normal";
    mxUtils.write(stylePanel5, mxResources.get("writingDirection"));
    return stylePanel5;
  }

  appendStylePanel3() {
    const {
      container,
      fontStyleItems,
      verticalItem,
      left,
      center,
      right,
      top,
      middle,
      bottom,
      stylePanel3,
    } = this;
    this.styleButtons(fontStyleItems);
    this.styleButtons([verticalItem]);

    this.styleButtons([left, center, right]);

    // Quick hack for strikethrough
    // TODO: Add translations and toggle state
    this.addStrikeThrough();

    this.styleButtons([top, middle, bottom]);

    if (mxClient.IS_QUIRKS) {
      mxUtils.br(container);
    }

    container.appendChild(stylePanel3);
  }

  createSpacingSpanPanel() {
    var span = this.createSpan();
    const { spacingPanel, resource } = this;
    mxUtils.write(span, resource("spacing"));
    spacingPanel.appendChild(span);

    mxUtils.br(spacingPanel);
    this.addLabel(spacingPanel, resource("top"), 91);
    this.addLabel(spacingPanel, resource("global"), 20);
    mxUtils.br(spacingPanel);
    mxUtils.br(spacingPanel);

    mxUtils.br(spacingPanel);
    this.addLabel(spacingPanel, resource("left"), 162);
    this.addLabel(spacingPanel, resource("bottom"), 91);
    this.addLabel(spacingPanel, resource("right"), 20);
  }

  updateUiOnCurrentTextSelection() {
    const {
      top,
      middle,
      bottom,
      verticalItem,
      stylePanel3,
      container,
      fontStyleItems,
      right,
      cellEditor,
    } = this;
    var sub;
    if (cellEditor.isContentEditing()) {
      top.style.display = "none";
      middle.style.display = "none";
      bottom.style.display = "none";
      verticalItem.style.display = "none";

      this.full = this.createFull();

      this.styleToolbarButtons();
      sub.style.marginLeft = "9px";

      var tmp = stylePanel3.cloneNode(false);
      tmp.style.paddingTop = "4px";
      this.addBtns4();

      if (mxClient.IS_QUIRKS) {
        mxUtils.br(container);
        tmp.style.height = "40";
      }

      container.appendChild(tmp);
    } else {
      fontStyleItems[2].style.marginRight = "9px";
      right.style.marginRight = "9px";
    }
  }

  addStrikeThrough() {
    const { graph, stylePanel2, toolbar, resource } = this;
    if (graph.cellEditor.isContentEditing()) {
      var strike = toolbar.addButton(
        "geSprite-removeformat",
        resource("strikethrough"),
        function () {
          document.execCommand("strikeThrough", false);
        },
        stylePanel2
      );
      this.styleButtons([strike]);

      strike.firstChild.style.background =
        "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMwMTAxMDEiIGQ9Ik03LjI0IDguNzVjLS4yNi0uNDgtLjM5LTEuMDMtLjM5LTEuNjcgMC0uNjEuMTMtMS4xNi40LTEuNjcuMjYtLjUuNjMtLjkzIDEuMTEtMS4yOS40OC0uMzUgMS4wNS0uNjMgMS43LS44My42Ni0uMTkgMS4zOS0uMjkgMi4xOC0uMjkuODEgMCAxLjU0LjExIDIuMjEuMzQuNjYuMjIgMS4yMy41NCAxLjY5Ljk0LjQ3LjQuODMuODggMS4wOCAxLjQzLjI1LjU1LjM4IDEuMTUuMzggMS44MWgtMy4wMWMwLS4zMS0uMDUtLjU5LS4xNS0uODUtLjA5LS4yNy0uMjQtLjQ5LS40NC0uNjgtLjItLjE5LS40NS0uMzMtLjc1LS40NC0uMy0uMS0uNjYtLjE2LTEuMDYtLjE2LS4zOSAwLS43NC4wNC0xLjAzLjEzLS4yOS4wOS0uNTMuMjEtLjcyLjM2LS4xOS4xNi0uMzQuMzQtLjQ0LjU1LS4xLjIxLS4xNS40My0uMTUuNjYgMCAuNDguMjUuODguNzQgMS4yMS4zOC4yNS43Ny40OCAxLjQxLjdINy4zOWMtLjA1LS4wOC0uMTEtLjE3LS4xNS0uMjV6TTIxIDEydi0ySDN2Mmg5LjYyYy4xOC4wNy40LjE0LjU1LjIuMzcuMTcuNjYuMzQuODcuNTEuMjEuMTcuMzUuMzYuNDMuNTcuMDcuMi4xMS40My4xMS42OSAwIC4yMy0uMDUuNDUtLjE0LjY2LS4wOS4yLS4yMy4zOC0uNDIuNTMtLjE5LjE1LS40Mi4yNi0uNzEuMzUtLjI5LjA4LS42My4xMy0xLjAxLjEzLS40MyAwLS44My0uMDQtMS4xOC0uMTNzLS42Ni0uMjMtLjkxLS40MmMtLjI1LS4xOS0uNDUtLjQ0LS41OS0uNzUtLjE0LS4zMS0uMjUtLjc2LS4yNS0xLjIxSDYuNGMwIC41NS4wOCAxLjEzLjI0IDEuNTguMTYuNDUuMzcuODUuNjUgMS4yMS4yOC4zNS42LjY2Ljk4LjkyLjM3LjI2Ljc4LjQ4IDEuMjIuNjUuNDQuMTcuOS4zIDEuMzguMzkuNDguMDguOTYuMTMgMS40NC4xMy44IDAgMS41My0uMDkgMi4xOC0uMjhzMS4yMS0uNDUgMS42Ny0uNzljLjQ2LS4zNC44Mi0uNzcgMS4wNy0xLjI3cy4zOC0xLjA3LjM4LTEuNzFjMC0uNi0uMS0xLjE0LS4zMS0xLjYxLS4wNS0uMTEtLjExLS4yMy0uMTctLjMzSDIxeiIvPjwvc3ZnPg==)";
      strike.firstChild.style.backgroundPosition = "2px 2px";
      strike.firstChild.style.backgroundSize = "18px 18px";

      this.styleButtons([strike]);
    }
  }

  addBtns4() {
    this.toolbarFormatButtons.addBtns4();
  }

  createStyledStepper() {
    const { input, inputUpdate } = this;
    var stepper = this.createStepper(
      input,
      inputUpdate,
      1,
      10,
      true,
      this.defaultFontSize
    );
    stepper.style.display = input.style.display;
    stepper.style.marginTop = "4px";

    if (!mxClient.IS_QUIRKS) {
      stepper.style.right = "20px";
    }
    return stepper;
  }

  createDirSelect() {
    const dirSelect = document.createElement("select");
    dirSelect.style.position = "absolute";
    dirSelect.style.right = "20px";
    dirSelect.style.width = "97px";
    dirSelect.style.marginTop = "-2px";
    return dirSelect;
  }

  createStylePanel() {
    var stylePanel = this.createPanel();
    stylePanel.style.paddingTop = "2px";
    stylePanel.style.paddingBottom = "2px";
    stylePanel.style.position = "relative";
    stylePanel.style.marginLeft = "-2px";
    stylePanel.style.borderWidth = "0px";
    stylePanel.className = "geToolbarContainer";
    if (mxClient.IS_QUIRKS) {
      stylePanel.style.display = "block";
    }
    const { container, cellEditor } = this;

    if (cellEditor.isContentEditing()) {
      this.cssPanel = stylePanel.cloneNode();
      this.cssMenu = this.createCssMenu();
      const { cssMenu, cssPanel } = this;

      var arrow = cssMenu.getElementsByTagName("div")[0];
      arrow.style.cssFloat = "right";
      container.appendChild(cssPanel);
    }
    return stylePanel;
  }

  styleToolbarButtons() {
    const { full, stylePanel3, toolbar, ctrlKey } = this;
    this.styleButtons([
      full,
      toolbar.addButton(
        "geSprite-subscript",
        mxResources.get("subscript") + " (" + ctrlKey + "+,)",
        function () {
          document.execCommand("subscript", false);
        },
        stylePanel3
      ),
      toolbar.addButton(
        "geSprite-superscript",
        mxResources.get("superscript") + " (" + ctrlKey + "+.)",
        function () {
          document.execCommand("superscript", false);
        },
        stylePanel3
      ),
    ]);
  }

  createSpan() {
    const span = document.createElement("div");
    span.style.position = "absolute";
    span.style.width = "70px";
    span.style.marginTop = "0px";
    span.style.fontWeight = "bold";
    return span;
  }

  createInputHandler() {
    return new InputHandler(
      this.format,
      this.editorUi,
      this.container
    ).create();
  }

  appendPanelToContainer() {
    return this.createNewPanel("container");
  }

  createExtraPanel() {
    return this.createNewPanel("extra");
  }

  createFontColorPanel() {
    return this.createNewPanel("fontColor");
  }

  createNewPanel(name) {
    return new this.panelMap[name](
      this.format,
      this.editorUi,
      this.container
    ).create();
  }

  createBgPanel() {
    return this.createNewPanel("background");
  }

  createCssMenu() {
    const { cssPanel } = this;
    var cssMenu = this.editorUi.toolbar.addMenu(
      mxResources.get("style"),
      mxResources.get("style"),
      true,
      "formatBlock",
      cssPanel,
      null,
      true
    );
    cssMenu.style.color = "rgb(112, 112, 112)";
    cssMenu.style.whiteSpace = "nowrap";
    cssMenu.style.overflow = "hidden";
    cssMenu.style.margin = "0px";
    this.addArrow(cssMenu);
    cssMenu.style.width = "192px";
    cssMenu.style.height = "15px";
    return cssMenu;
  }

  get fontStyleItems() {
    this._fontStyleItems = this._fontStyleItems || this.createFontStyleItems();
    return this._fontStyleItems;
  }

  createFontStyleItems() {
    const { stylePanel2 } = this;
    const fontStyleItems = this.editorUi.toolbar.addItems(
      ["bold", "italic", "underline"],
      stylePanel2,
      true
    );

    fontStyleItems[0].setAttribute(
      "title",
      mxResources.get("bold") +
        " (" +
        this.editorUi.actions.get("bold").shortcut +
        ")"
    );
    fontStyleItems[1].setAttribute(
      "title",
      mxResources.get("italic") +
        " (" +
        this.editorUi.actions.get("italic").shortcut +
        ")"
    );
    fontStyleItems[2].setAttribute(
      "title",
      mxResources.get("underline") +
        " (" +
        this.editorUi.actions.get("underline").shortcut +
        ")"
    );
    return fontStyleItems;
  }

  addKeyHandlers(input) {
    const {
      listener,
      globalSpacing,
      topSpacing,
      rightSpacing,
      bottomSpacing,
      leftSpacing,
    } = this;
    this.addKeyHandler(input, listener);
    this.addKeyHandler(globalSpacing, listener);
    this.addKeyHandler(topSpacing, listener);
    this.addKeyHandler(rightSpacing, listener);
    this.addKeyHandler(bottomSpacing, listener);
    this.addKeyHandler(leftSpacing, listener);
  }

  setSelected = (elt, selected) => {
    if (mxClient.IS_IE && (mxClient.IS_QUIRKS || this.documentMode < 10)) {
      elt.style.filter = selected
        ? "progid:DXImageTransform.Microsoft.Gradient(" +
          "StartColorStr='#c5ecff', EndColorStr='#87d4fb', GradientType=0)"
        : "";
    } else {
      elt.style.backgroundImage = selected
        ? "linear-gradient(#c5ecff 0px,#87d4fb 100%)"
        : "";
    }
  };

  createFontSizeInput() {
    var input = document.createElement("input");
    input.style.textAlign = "right";
    input.style.marginTop = "4px";

    if (!mxClient.IS_QUIRKS) {
      input.style.position = "absolute";
      input.style.right = "32px";
    }

    input.style.width = "46px";
    input.style.height = mxClient.IS_QUIRKS ? "21px" : "17px";
    return input;
  }

  get topSpacing() {
    return this.addUnitInput(
      this.spacingPanel,
      "pt",
      91,
      44,
      () => this.topUpdate
    );
  }

  get globalSpacing() {
    return this.addUnitInput(
      this.spacingPanel,
      "pt",
      20,
      44,
      () => this.globalUpdate
    );
  }

  get spacingPanel() {
    this._spacingPanel = this._spacingPanel || this.createSpacingPanel();
    return this._spacingPanel;
  }

  createContainerTitle() {
    const title = this.createTitle(mxResources.get("font"));
    title.style.paddingLeft = "18px";
    title.style.paddingTop = "10px";
    title.style.paddingBottom = "6px";
    return title;
  }

  createSpacingPanel() {
    const spacingPanel = this.createPanel();
    spacingPanel.style.paddingTop = "10px";
    spacingPanel.style.paddingBottom = "28px";
    spacingPanel.style.fontWeight = "normal";
    return spacingPanel;
  }

  get leftSpacing() {
    return this.addUnitInput(
      this.spacingPanel,
      "pt",
      162,
      44,
      () => this.leftUpdate
    );
  }

  get bottomSpacing() {
    this._bottomSpacing = this.bottomSpacing || this.createBottomSpacing();
    return this._bottomSpacing;
  }

  createBottomSpacing() {
    return this.addUnitInput(
      this.spacingPanel,
      "pt",
      91,
      44,
      () => this.bottomUpdate
    );
  }

  get rightSpacing() {
    return this.addUnitInput(
      this.spacingPanel,
      "pt",
      20,
      44,
      () => this.rightUpdate
    );
  }

  get globalUpdate() {
    return this.installInputHandler(
      this.globalSpacing,
      mxConstants.STYLE_SPACING,
      2,
      -999,
      999,
      " pt"
    );
  }

  get topUpdate() {
    return this.installInputHandler(
      this.topSpacing,
      mxConstants.STYLE_SPACING_TOP,
      0,
      -999,
      999,
      " pt"
    );
  }

  get rightUpdate() {
    return this.installInputHandler(
      this.rightSpacing,
      mxConstants.STYLE_SPACING_RIGHT,
      0,
      -999,
      999,
      " pt"
    );
  }

  get bottomUpdate() {
    return this.installInputHandler(
      this.bottomSpacing,
      mxConstants.STYLE_SPACING_BOTTOM,
      0,
      -999,
      999,
      " pt"
    );
  }

  get leftUpdate() {
    return this.installInputHandler(
      this.leftSpacing,
      mxConstants.STYLE_SPACING_LEFT,
      0,
      -999,
      999,
      " pt"
    );
  }

  createColorPanel() {
    const colorPanel = this.createPanel();
    colorPanel.style.marginTop = "8px";
    colorPanel.style.borderTop = "1px solid #c0c0c0";
    colorPanel.style.paddingTop = "6px";
    colorPanel.style.paddingBottom = "6px";
    return colorPanel;
  }

  createFontMenu() {
    const { stylePanel } = this;
    const fontMenu = this.editorUi.toolbar.addMenu(
      "Helvetica",
      mxResources.get("fontFamily"),
      true,
      "fontFamily",
      stylePanel,
      null,
      true
    );
    fontMenu.style.color = "rgb(112, 112, 112)";
    fontMenu.style.whiteSpace = "nowrap";
    fontMenu.style.overflow = "hidden";
    fontMenu.style.margin = "0px";

    this.addArrow(fontMenu);
    fontMenu.style.width = "192px";
    fontMenu.style.height = "15px";
    return fontMenu;
  }

  get stylePanel2(): any {
    this._stylePanel2 = this._stylePanel2 || this.createStylePanel2();
    return this._stylePanel2;
  }

  createStylePanel2() {
    const { stylePanel } = this;
    const stylePanel2: any = stylePanel.cloneNode(false);
    stylePanel2.style.marginLeft = "-3px";
    return stylePanel2;
  }

  get stylePanel3(): any {
    this._stylePanel3 = this._stylePanel3 || this.createStylePanel3();
    return this._stylePanel3;
  }

  protected createStylePanel3() {
    const { stylePanel } = this;
    const stylePanel3 = stylePanel.cloneNode(false);
    stylePanel3.style.marginLeft = "-3px";
    stylePanel3.style.paddingBottom = "0px";
    return stylePanel3;
  }

  protected createFull() {
    const { stylePanel3 } = this;
    const full = this.editorUi.toolbar.addButton(
      "geSprite-justifyfull",
      mxResources.get("block"),
      function () {
        if (full.style.opacity == 1) {
          document.execCommand("justifyfull", false, undefined);
        }
      },
      stylePanel3
    );
    full.style.marginRight = "9px";
    full.style.opacity = 1;
    return full;
  }

  get verticalItem() {
    const { stylePanel2 } = this;
    return this.editorUi.toolbar.addItems(["vertical"], stylePanel2, true)[0];
  }

  get left() {
    const { callFn, graph, stylePanel3 } = this;
    return this.editorUi.toolbar.addButton(
      "geSprite-left",
      mxResources.get("left"),
      graph.cellEditor.isContentEditing()
        ? function (evt) {
            graph.cellEditor.alignText(mxConstants.ALIGN_LEFT, evt);
          }
        : callFn(
            this.editorUi.menus.createStyleChangeFunction(
              [mxConstants.STYLE_ALIGN],
              [mxConstants.ALIGN_LEFT]
            )
          ),
      stylePanel3
    );
  }

  get center() {
    const { callFn, stylePanel3, toolbar, menus, cellEditor, resource } = this;
    return toolbar.addButton(
      "geSprite-center",
      resource("center"),
      cellEditor.isContentEditing()
        ? function (evt) {
            cellEditor.alignText(mxConstants.ALIGN_CENTER, evt);
          }
        : callFn(
            menus.createStyleChangeFunction(
              [mxConstants.STYLE_ALIGN],
              [mxConstants.ALIGN_CENTER]
            )
          ),
      stylePanel3
    );
  }

  get right() {
    const { callFn, stylePanel3, cellEditor, toolbar, menus, resource } = this;
    return toolbar.addButton(
      "geSprite-right",
      resource("right"),
      cellEditor.isContentEditing()
        ? function (evt) {
            cellEditor.alignText(mxConstants.ALIGN_RIGHT, evt);
          }
        : callFn(
            menus.createStyleChangeFunction(
              [mxConstants.STYLE_ALIGN],
              [mxConstants.ALIGN_RIGHT]
            )
          ),
      stylePanel3
    );
  }

  // Helper function to return a wrapper function does not pass any arguments
  callFn = (fn) => {
    return fn();
  };
}
