import { TextFormatPanel } from "../..";
import {
  editorUi as ui,
  format,
  container,
  editor,
  graph,
  editorUi,
} from "../mocks";

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

      describe("editor", () => {
        it("is set", () => {
          expect(instance.editor).toBe(editor);
        });
      });

      describe("graph", () => {
        it("is set", () => {
          expect(instance.graph).toBe(graph);
        });
      });

      describe("toolbar", () => {
        it("is set", () => {
          expect(instance.toolbar).toBeDefined();
        });
      });

      describe("menus", () => {
        it("is set", () => {
          expect(instance.menus).toBeDefined();
        });
      });

      describe("cellEditor", () => {
        it("is set", () => {
          expect(instance.cellEditor).toBeDefined();
        });
      });

      describe("ss", () => {
        it("is set", () => {
          expect(instance.graph).toBeDefined();
        });
      });

      describe("ctrlKey", () => {
        it("is set", () => {
          expect(instance.ctrlKey).toBeDefined();
        });
      });

      describe("panelMap", () => {
        it("is set", () => {
          expect(instance.panelMap).toBeDefined();
        });
      });

      describe("stylePanel", () => {
        it("is set", () => {
          expect(instance.stylePanel).toBeDefined();
        });
      });

      describe("input", () => {
        it("is set", () => {
          expect(instance.input).toBeDefined();
        });
      });

      describe("inputUpdate", () => {
        it("is set", () => {
          expect(instance.inputUpdate).toBeDefined();
        });
      });

      describe("cssMenu", () => {
        it("is set", () => {
          expect(instance.cssMenu).toBeDefined();
        });
      });

      describe("cssPanel", () => {
        it("is set", () => {
          expect(instance.cssPanel).toBeDefined();
        });
      });

      describe("full", () => {
        it("is set", () => {
          expect(instance.full).toBeDefined();
        });
      });

      describe("defaultFont", () => {
        it("is set", () => {
          expect(instance.defaultFont).toBeDefined();
        });
      });

      describe("defaultFontSize", () => {
        it("is set", () => {
          expect(instance.defaultFontSize).toBeDefined();
        });
      });

      describe("colorPanel", () => {
        it("is set", () => {
          expect(instance.colorPanel).toBeDefined();
        });
      });
      describe("defaultFontSize", () => {
        it("is set", () => {
          expect(instance.defaultFontSize).toBeDefined();
        });
      });
      describe("fontMenu", () => {
        it("is set", () => {
          expect(instance.fontMenu).toBeDefined();
        });
      });
      describe("arrow", () => {
        it("is set", () => {
          expect(instance.arrow).toBeDefined();
        });
      });
      describe("bgPanel", () => {
        it("is set", () => {
          expect(instance.bgPanel).toBeDefined();
        });
      });

      describe("borderPanel", () => {
        it("is set", () => {
          expect(instance.borderPanel).toBeDefined();
        });
      });

      describe("panel", () => {
        it("is set", () => {
          expect(instance.panel).toBeDefined();
        });
      });

      describe("top", () => {
        it("is set", () => {
          expect(instance.top).toBeDefined();
        });
      });

      describe("middle", () => {
        it("is set", () => {
          expect(instance.middle).toBeDefined();
        });
      });

      describe("bottom", () => {
        it("is set", () => {
          expect(instance.bottom).toBeDefined();
        });
      });

      describe("directions", () => {
        it("is set", () => {
          expect(instance.directions).toBeDefined();
        });
      });

      describe("fontStyleItems", () => {
        it("is set", () => {
          expect(instance.fontStyleItems).toBeDefined();
        });
      });

      describe("topSpacing", () => {
        it("is set", () => {
          expect(instance.topSpacing).toBeDefined();
        });
      });

      describe("globalSpacing", () => {
        it("is set", () => {
          expect(instance.globalSpacing).toBeDefined();
        });
      });

      describe("spacingPanel", () => {
        it("is set", () => {
          expect(instance.spacingPanel).toBeDefined();
        });
      });

      describe("leftSpacing", () => {
        it("is set", () => {
          expect(instance.leftSpacing).toBeDefined();
        });
      });

      describe("bottomSpacing", () => {
        it("is set", () => {
          expect(instance.bottomSpacing).toBeDefined();
        });
      });

      describe("rightSpacing", () => {
        it("is set", () => {
          expect(instance.rightSpacing).toBeDefined();
        });
      });

      describe("globalUpdate", () => {
        it("is set", () => {
          expect(instance.globalUpdate).toBeDefined();
        });
      });

      describe("topUpdate", () => {
        it("is set", () => {
          expect(instance.topUpdate).toBeDefined();
        });
      });

      describe("rightUpdate", () => {
        it("is set", () => {
          expect(instance.rightUpdate).toBeDefined();
        });
      });

      describe("bottomUpdate", () => {
        it("is set", () => {
          expect(instance.bottomUpdate).toBeDefined();
        });
      });

      describe("leftUpdate", () => {
        it("is set", () => {
          expect(instance.leftUpdate).toBeDefined();
        });
      });

      describe("stylePanel2", () => {
        it("is set", () => {
          expect(instance.stylePanel2).toBeDefined();
        });
      });

      describe("stylePanel3", () => {
        it("is set", () => {
          expect(instance.stylePanel3).toBeDefined();
        });
      });

      describe("verticalItem", () => {
        it("is set", () => {
          expect(instance.verticalItem).toBeDefined();
        });
      });

      describe("left", () => {
        it("is set", () => {
          expect(instance.left).toBeDefined();
        });
      });

      describe("center", () => {
        it("is set", () => {
          expect(instance.center).toBeDefined();
        });
      });

      describe("right", () => {
        it("is set", () => {
          expect(instance.right).toBeDefined();
        });
      });
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

      describe("addFont(container)", () => {
        it("adds font panel to container", () => {
          const container = document.createElement("div");
          expect(instance.addFont(container)).toBeDefined();
        });
      });

      describe("createBorderPanel()", () => {
        it("creates border panel", () => {
          expect(instance.createBorderPanel()).toBeDefined();
        });
      });

      describe("createPositionSelect()", () => {
        it("creates position select panel", () => {
          expect(instance.createPositionSelect()).toBeDefined();
        });
      });

      describe("appendStylePanel3()", () => {
        it("appends style panel", () => {
          expect(instance.appendStylePanel3()).toBeDefined();
        });
      });

      describe("appendStylePanel4()", () => {
        it("appends style panel", () => {
          expect(instance.appendStylePanel4()).toBeDefined();
        });
      });

      describe("appendStylePanel5()", () => {
        it("appends style panel", () => {
          expect(instance.appendStylePanel5()).toBeDefined();
        });
      });

      describe("createSpacingSpanPanel()", () => {
        it("creates spaing span panel", () => {
          expect(instance.createSpacingSpanPanel()).toBeDefined();
        });
      });

      describe("updateUiOnCurrentTextSelection()", () => {
        it("updates ui", () => {
          expect(instance.updateUiOnCurrentTextSelection()).toBeDefined();
        });
      });

      describe("addStrikeThrough()", () => {
        it("adds strike through", () => {
          expect(instance.addStrikeThrough()).toBeDefined();
        });
      });

      describe("addBtns4()", () => {
        it("adds btns", () => {
          expect(instance.addBtns4()).toBeDefined();
        });
      });

      describe("createStyledStepper()", () => {
        it("creates stepper", () => {
          expect(instance.createStyledStepper()).toBeDefined();
        });
      });

      describe("createDirSelect()", () => {
        it("creates direction selector", () => {
          expect(instance.createDirSelect()).toBeDefined();
        });
      });

      describe("createStylePanel()", () => {
        it("creates style panel", () => {
          expect(instance.createStylePanel()).toBeDefined();
        });
      });

      describe("styleToolbarButtons()", () => {
        it("styles toolbar buttons", () => {
          expect(instance.styleToolbarButtons()).toBeDefined();
        });
      });

      describe("createSpan()", () => {
        it("creates span", () => {
          expect(instance.createSpan()).toBeDefined();
        });
      });

      describe("createInputHandler()", () => {
        it("creates input handler", () => {
          expect(instance.createInputHandler()).toBeDefined();
        });
      });

      describe("appendPanelToContainer()", () => {
        it("appends panel to container", () => {
          expect(instance.appendPanelToContainer()).toBeDefined();
        });
      });

      describe("createExtraPanel()", () => {
        it("create extra panel", () => {
          expect(instance.createExtraPanel()).toBeDefined();
        });
      });

      describe("createFontColorPanel()", () => {
        it("creates font color panel", () => {
          expect(instance.createFontColorPanel()).toBeDefined();
        });
      });

      describe("createNewPanel(name)", () => {
        it("creates new panel", () => {
          expect(instance.createNewPanel(name)).toBeDefined();
        });
      });

      describe("createBgPanel()", () => {
        it("creates background panel", () => {
          expect(instance.createBgPanel()).toBeDefined();
        });
      });

      describe("createCssMenu()", () => {
        it("creates css menu", () => {
          expect(instance.createCssMenu()).toBeDefined();
        });
      });

      describe("createFontStyleItems()", () => {
        it("creates font style items", () => {
          expect(instance.createFontStyleItems()).toBeDefined();
        });
      });

      describe("addKeyHandlers(input)", () => {
        it("adds key handlers", () => {
          const input = document.createElement("input");
          expect(instance.addKeyHandlers(input)).toBeDefined();
        });
      });

      describe("setSelected(elt, selected)", () => {
        it("adds key handlers", () => {
          const elem = document.createElement("select");
          const selected = {};
          expect(instance.setSelected(elem, selected)).toBeDefined();
        });
      });

      describe("createFontSizeInput()", () => {
        it("creates font size input", () => {
          expect(instance.createFontSizeInput()).toBeDefined();
        });
      });

      describe("createContainerTitle()", () => {
        it("creates container title", () => {
          expect(instance.createContainerTitle()).toBeDefined();
        });
      });

      describe("createSpacingPanel()", () => {
        it("creates spacing panel", () => {
          expect(instance.createSpacingPanel()).toBeDefined();
        });
      });

      describe("createBottomSpacing()", () => {
        it("creates botom spacing", () => {
          expect(instance.createBottomSpacing()).toBeDefined();
        });
      });

      describe("createColorPanel()", () => {
        it("creates color panel", () => {
          expect(instance.createColorPanel()).toBeDefined();
        });
      });

      describe("createFontMenu()", () => {
        it("creates font menu", () => {
          expect(instance.createFontMenu()).toBeDefined();
        });
      });

      describe("createStylePanel2()", () => {
        it("creates style panel", () => {
          expect(instance.createStylePanel2()).toBeDefined();
        });
      });

      describe("createStylePanel3()", () => {
        it("creates style panel", () => {
          expect(instance.createStylePanel3()).toBeDefined();
        });
      });

      describe("createFull()", () => {
        it("creates full", () => {
          expect(instance.createFull()).toBeDefined();
        });
      });
    });
  });
});
