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
    });
  });
});
