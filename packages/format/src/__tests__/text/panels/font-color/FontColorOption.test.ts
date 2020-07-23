import { FontColorOption } from "../../../../";
import { editorUi as ui, format, container, editorUi } from "../../../mocks";

describe("FontColorPanel", () => {
  let instance, div;
  beforeEach(() => {
    instance = new FontColorOption(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("initialColor", () => {
        it("is set", () => {
          expect(instance.initialColor).toBeDefined();
        });
      });

      describe("fontColorOption", () => {
        it("is set", () => {
          expect(instance.fontColorOption).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("setCellStyles(value)", () => {
        it("sets cell style", () => {
          const value = "1";
          expect(instance.setCellStyles(value)).toBeDefined();
        });
      });

      describe("resetSelectedCells(color)", () => {
        it("resets selected cells", () => {
          const color = "black";
          expect(instance.resetSelectedCells(color)).toBeDefined();
        });
      });

      describe("resetSelectedCells(color)", () => {
        it("resets elememnt color", () => {
          const elem = document.createElement("div");
          expect(instance.resetElementColor(elem)).toBeDefined();
        });
      });
    });
  });
});
