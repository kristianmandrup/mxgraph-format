import { InputHandler } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("InputHandler", () => {
  let instance;
  beforeEach(() => {
    instance = new InputHandler(format, editorUi, container);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("input", () => {
        it("is set", () => {
          expect(instance.input).toBeDefined();
        });
      });

      describe("installInputHandler", () => {
        it("is set", () => {
          expect(instance.installInputHandler).toBeDefined();
        });
      });

      describe("defaultFontSize", () => {
        it("is set", () => {
          expect(instance.defaultFontSize).toBeDefined();
        });
      });

      describe("pendingFontSize", () => {
        it("is set", () => {
          expect(instance.pendingFontSize).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("textAreaContains(elem, ignoreContains)", () => {
        it("determines if textarea contains elem", () => {
          const elem = document.createElement("div");
          const ignoreContains = false;
          expect(() =>
            instance.textAreaContains(elem, ignoreContains)
          ).not.toThrow();
        });
      });

      describe("updateSize(elem, ignoreContains)", () => {
        it("updates size of element", () => {
          const elem = document.createElement("div");
          const ignoreContains = false;
          expect(() => instance.updateSize(elem, ignoreContains)).not.toThrow();
        });
      });

      describe("setFontElem(elem)", () => {
        it("sets font on elem", () => {
          const elem = document.createElement("div");
          expect(() => instance.setFontElem(elem)).not.toThrow();
        });
      });

      describe("isDiffFontSize(elem)", () => {
        it("determine if different font size", () => {
          const elem = document.createElement("div");
          expect(() => instance.isDiffFontSize(elem)).not.toThrow();
        });
      });

      describe("cssFor(elem)", () => {
        it("get css for elem", () => {
          const elem = document.createElement("div");
          expect(() => instance.cssFor(elem)).not.toThrow();
        });
      });

      describe("setFontStyle(elem)", () => {
        it("sets font style on elem", () => {
          const elem = document.createElement("div");
          expect(() => instance.setFontStyle(elem)).not.toThrow();
        });
      });

      describe("calcNewFontSize(elem)", () => {
        it("calculates new font size", () => {
          const elem = document.createElement("div");
          expect(() => instance.calcNewFontSize(elem)).not.toThrow();
        });
      });

      describe("setNewFontSize(elem)", () => {
        it("sets font size on elem", () => {
          const elem = document.createElement("div");
          expect(() => instance.setNewFontSize(elem)).not.toThrow();
        });
      });

      describe("handle()", () => {
        it("handles", () => {
          expect(() => instance.handle()).not.toThrow();
        });
      });
    });
  });
});
