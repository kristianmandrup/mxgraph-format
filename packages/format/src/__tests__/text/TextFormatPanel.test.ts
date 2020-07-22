import { TextFormatPanel } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("TextFormatPanel", () => {
  let instance, div;
  beforeEach(() => {
    instance = new TextFormatPanel(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });
      // editor
      // graph
      // ss
      // ctrlKey: any; // Editor.ctrlKey
      // selection: any; // document.selection
      // documentMode: any; // document.documentMode
      // panelMap = defaults.panelMap;
      // stylePanel: any;
      // input: any;
      // inputUpdate: any;
      // cssMenu: any;
      // cssPanel: any;
      // full: any;
      // defaultFont = "Helvetica";
      // defaultFontSize = "12";

      // colorPanel
      // fontMenu
      // arrow
      // bgPanel
      // borderPanel
      // panel
      // dirSet
      // dirs

      // top
      // middle
      // bottom
      // directions

      // fontStyleItems
      // topSpacing
      // globalSpacing
      // spacingPanel
      // leftSpacing
      // bottomSpacing
      // rightSpacing
      // globalUpdate
      // topUpdate
      // rightUpdate
      // bottomUpdate
      // leftUpdate

      // stylePanel2
      // stylePanel3
      // verticalItem
      // left
      // center
      // right
    });

    describe("methods", () => {
      describe("createToolbarFormatButtons()", () => {
        it("creates instance", () => {
          expect(instance.createToolbarFormatButtons()).toBeDefined();
        });
      });

      describe("init()", () => {
        it("inits", () => {
          expect(instance.init()).toBeDefined();
        });
      });

      // addFont(container);
      // createBorderPanel();
      // createPositionSelect()
      // appendStylePanel3()
      // createStylePanel4()
      // createStylePanel5()

      // createSpacingSpanPanel()
      // updateUiOnCurrentTextSelection()
      // addStrikeThrough()
      // addBtns4()
      // createStyledStepper()
      // createDirSelect()
      // createStylePanel()
      // styleToolbarButtons()
      // createSpan()
      // createInputHandler()
      // appendPanelToContainer()
      // createExtraPanel()
      // createFontColorPanel()
      // createNewPanel(name)
      // createBgPanel()
      // createCssMenu()
      // createFontStyleItems()
      // addKeyHandlers(input)
      // setSelected(elt, selected)
      // createFontSizeInput()

      // createContainerTitle()
      // createSpacingPanel()
      // createBottomSpacing()
      // createColorPanel()
      // createFontMenu()
      // createStylePanel2()
      // createStylePanel3()
      // createFull()
    });
  });
});
