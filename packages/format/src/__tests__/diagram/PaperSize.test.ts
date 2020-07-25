import { PaperSize } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("PaperSize", () => {
  let instance, div;
  beforeEach(() => {
    instance = new PaperSize(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });
    });

    describe("methods", () => {
      describe("addPageFormatPanel()", () => {
        it("adds page format panel", () => {
          expect(instance.addPageFormatPanel()).toBeDefined();
        });
      });

      describe("createChangePageSetup()", () => {
        it("creates instance", () => {
          expect(instance.createChangePageSetup()).toBeDefined();
        });
      });

      describe("createAccessor()", () => {
        it("creates instance", () => {
          instance.createAccessor();
          expect(instance.accessor).toBeDefined();
        });
      });

      describe("registerAccessorHandlers()", () => {
        it("registers handlers", () => {
          expect(() => instance.registerAccessorHandlers()).not.toThrow();
        });
      });

      describe("addWidthInputKeyHandler()", () => {
        it("adds weight input handler", () => {
          expect(() => instance.addWidthInputKeyHandler()).not.toThrow();
        });
      });

      describe("addHeightInputKeyHandler()", () => {
        it("adds height input handler", () => {
          expect(() => instance.addHeightInputKeyHandler()).not.toThrow();
        });
      });

      describe("appendTitle()", () => {
        it("appends title", () => {
          expect(() => instance.appendTitle()).not.toThrow();
        });
      });

      describe("addPaperSize(div)", () => {
        it("adds paper size to div", () => {
          expect(() => instance.addPaperSize(div)).not.toThrow();
        });
      });
    });
  });
});
