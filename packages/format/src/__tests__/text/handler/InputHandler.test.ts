import { InputHandler } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("InputHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new InputHandler(format, editorUi, container);
    div = document.createElement("div");
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
      describe("create()", () => {
        it("creates input handler", () => {
          expect(instance.create()).toBeDefined();
        });
      });
    });
  });
});
