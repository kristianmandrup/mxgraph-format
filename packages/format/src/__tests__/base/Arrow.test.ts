import { Arrow } from "../..";
import { editorUi as ui, format, container } from "../mocks";

describe("Arrow", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Arrow();
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("buttonBackgroundColor", () => {
        it("is set", () => {
          expect(instance.buttonBackgroundColor).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("styleElement()", () => {
        it("styles element", () => {
          expect(instance.styleElement()).toBeDefined();
        });
      });

      describe("createSymbol()", () => {
        it("creates symbol elem", () => {
          expect(instance.createSymbol()).toBeDefined();
        });
      });

      describe("createArrow()", () => {
        it("creates arrow elem", () => {
          expect(instance.createArrow()).toBeDefined();
        });
      });

      describe("add(elem, height)", () => {
        it("adds arrow to element", () => {
          const elem = document.createElement("div");
          const height = 10;
          expect(instance.add(elem, height)).toBeDefined();
        });
      });
    });
  });
});
