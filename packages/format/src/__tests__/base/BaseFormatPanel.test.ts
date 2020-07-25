import { BaseFormatPanel } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("BaseFormatPanel", () => {
  let instance, div;
  beforeEach(() => {
    instance = new BaseFormatPanel(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("ss", () => {
        it("is set", () => {
          expect(instance.ss).toBeDefined();
        });
      });

      describe("editor", () => {
        it("is set", () => {
          expect(instance.editor).toBeDefined();
        });
      });

      describe("graph", () => {
        it("is set", () => {
          expect(instance.graph).toBeDefined();
        });
      });

      describe("cellEditor", () => {
        it("is set", () => {
          expect(instance.cellEditor).toBeDefined();
        });
      });

      describe("menus", () => {
        it("is set", () => {
          expect(instance.menus).toBeDefined();
        });
      });

      describe("toolbar", () => {
        it("is set", () => {
          expect(instance.toolbar).toBeDefined();
        });
      });

      describe("actions", () => {
        it("is set", () => {
          expect(instance.actions).toBeDefined();
        });
      });

      describe("hasEdges", () => {
        it("is false", () => {
          expect(instance.hasEdges).toBeFalsy();
        });
      });

      describe("hasVertices", () => {
        it("is false", () => {
          expect(instance.hasVertices).toBeFalsy();
        });
      });

      describe("buttonBackgroundColor", () => {
        it("is set", () => {
          expect(instance.buttonBackgroundColor).toEqual("white");
        });
      });
    });

    describe("methods", () => {
      describe("write(target, text)", () => {
        it("writes text", () => {
          const target = document.createElement("div");
          const text = "hello";
          expect(() => instance.write(target, text)).not.toThrow();
        });
      });

      describe("createBtn(label, fn)", () => {
        it("creates button", () => {
          const fn = () => {};
          const label = "hello";
          expect(instance.createBtn(label, fn)).toBeDefined();
        });
      });

      describe("createBreak(elem)", () => {
        it("creates break elem", () => {
          const elem = document.createElement("div");
          expect(instance.createBreak(elem)).toBeDefined();
        });
      });

      describe("getSelectionState()", () => {
        it("get selection state", () => {
          expect(instance.getSelectionState()).toBeDefined();
        });
      });

      describe("resource(name)", () => {
        it("gets text from resource", () => {
          expect(instance.resource(name)).toBeDefined();
        });
      });

      describe("newSelectionState()", () => {
        it("get new selection state", () => {
          expect(instance.newSelectionState()).toBeDefined();
        });
      });

      describe("newSelectionState()", () => {
        it("get new selection state", () => {
          expect(instance.newSelectionState()).toBeDefined();
        });
      });

      describe("installInputHandler(input, key, defaultValue, min, max, unit)", () => {
        it("installs input handler", () => {
          const input = document.createElement("input");
          const key = "x",
            defaultValue = 0,
            min = 0,
            max = 10,
            unit = "mm";

          expect(
            instance.installInputHandler(
              input,
              key,
              defaultValue,
              min,
              max,
              unit
            )
          ).toBeDefined();
        });
      });

      describe("createInputHandlerInstaller()", () => {
        it("creates instance", () => {
          expect(instance.createInputHandlerInstaller()).toBeDefined();
        });
      });

      describe("createTitle(title)", () => {
        it("creates title element", () => {
          const title = "hello";
          expect(instance.createTitle(title)).toBeDefined();
        });
      });

      describe("newStepper()", () => {
        it("creates new stepper", () => {
          expect(instance.newStepper()).toBeDefined();
        });
      });

      describe("createStepper(input, update, step, height)", () => {
        it("creates new stepper", () => {
          const input = document.createElement("input");
          const update = () => {};
          const step = 2;
          const height = 10;
          expect(
            instance.createStepper(input, update, step, height)
          ).toBeDefined();
        });
      });

      describe("createOption(label, isCheckedFn, setCheckedFn, listener)", () => {
        it("creates option", () => {
          const label = "hello",
            isCheckedFn = true,
            setCheckedFn = () => {};
          const listener = () => {};
          expect(
            instance.createOption(label, isCheckedFn, setCheckedFn, listener)
          ).toBeDefined();
        });
      });

      describe("createCellOption(label, key)", () => {
        it("creates option", () => {
          const label = "hello",
            key = "x";
          expect(instance.createCellOption(label, key)).toBeDefined();
        });
      });

      describe("newCellOption()", () => {
        it("creates new instance", () => {
          expect(instance.newCellOption()).toBeDefined();
        });
      });

      describe("createColorOption(label, ...)", () => {
        it("creates color option", () => {
          const label = "hello",
            getColorFn = () => {},
            setColorFn = () => {},
            defaultColor = "black",
            listener = () => {};
          expect(
            instance.createColorOption(
              label,
              getColorFn,
              setColorFn,
              defaultColor,
              listener
            )
          ).toBeDefined();
        });
      });

      describe("newColorOption()", () => {
        it("creates new instance", () => {
          expect(instance.newColorOption()).toBeDefined();
        });
      });

      describe("createCellColorOption(label, key)", () => {
        it("creates cell color option", () => {
          const label = "hello",
            colorKey = "blue";
          expect(instance.createColorOption(label, colorKey)).toBeDefined();
        });
      });

      describe("newCellColorOption()", () => {
        it("creates new instance", () => {
          expect(instance.newCellColorOption()).toBeDefined();
        });
      });

      describe("addArrow(elem, height)", () => {
        it("adds arrow", () => {
          const elem = document.createElement("div");
          const height = 10;
          expect(instance.addArrow(elem, height)).toBeDefined();
        });
      });

      describe("createRelativeOption(label, key)", () => {
        it("creates cell color option", () => {
          const label = "hello",
            key = "blue";
          expect(instance.createRelativeOption(label, key)).toBeDefined();
        });
      });

      describe("newRelativeOption()", () => {
        it("creates new instance", () => {
          expect(instance.newRelativeOption()).toBeDefined();
        });
      });

      describe("styleButtons(elems)", () => {
        it("styles button elements", () => {
          const elem = document.createElement("button");
          const elems = [elem];
          expect(instance.styleButtons(elems)).toBeDefined();
        });
      });

      describe("destroy()", () => {
        it("destroys", () => {
          expect(instance.destroy()).toBeDefined();
        });
      });
    });
  });
});
