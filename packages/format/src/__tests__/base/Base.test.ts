import { Base } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("Base", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Base(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("graphContainer", () => {
        it("is set", () => {
          expect(instance.graphContainer).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("addUnitInput(container, unit, right, width, update)", () => {
        it("adds unit input to container", () => {
          const container = document.createElement("div");
          const unit = "mm";
          const right = 10,
            width = 10;
          const update = () => {};

          expect(() =>
            instance.addUnitInput(container, unit, right, width, update)
          ).not.toThrow();
        });
      });

      describe("newUnitInput()", () => {
        it("creates instance", () => {
          expect(instance.newUnitInput()).toBeDefined();
        });
      });

      describe("addKeyHandler(input, listener)", () => {
        it("adds key handler", () => {
          const input = document.createElement("input");
          const listener = () => {};
          expect(instance.addKeyHandler(input, listener)).toBeDefined();
        });
      });

      describe("onPressEnter(e)", () => {
        it("on enter - focus on graph", () => {
          const e = {
            keyyCode: 13,
          };
          expect(instance.onPressEnter(e)).toBeDefined();
        });
      });

      describe("onPressEscape(e, listener)", () => {
        it("on enter - focus on graph", () => {
          const e = {
            keyyCode: 27,
          };
          const listener = () => {};
          expect(instance.onPressEscape(e, listener)).toBeDefined();
        });
      });

      describe("addLabel(div, title, right)", () => {
        it("adds key handler", () => {
          const div = document.createElement("input");
          const title = "hello";
          const right = 1;
          expect(instance.addLabel(div, title, right)).toBeDefined();
        });
      });

      describe("createPanel()", () => {
        it("creates instance", () => {
          expect(instance.createPanel()).toBeDefined();
        });
      });
    });
  });
});
