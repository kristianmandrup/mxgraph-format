import { BackgroundPanel } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("BackgroundPanel", () => {
  let instance, div;
  beforeEach(() => {
    instance = new BackgroundPanel(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("currentBgColor", () => {
        it("is set", () => {
          expect(instance.currentBgColor).toBeDefined();
        });
      });

      describe("bgColorApply", () => {
        it("is set", () => {
          expect(instance.bgColorApply).toBeDefined();
        });
      });

      describe("isContentEditing", () => {
        it("is false", () => {
          expect(instance.isContentEditing).toBeFalsy();
        });
      });
    });

    describe("methods", () => {
      describe("create()", () => {
        it("creates background panel", () => {
          expect(instance.create()).toBeDefined();
        });
      });

      describe("createPanel()", () => {
        it("creates background panel", () => {
          const panel = instance.createPanel();
          expect(panel).toBeDefined();
          expect(instance.bgPanel).toBeDefined();
        });
      });

      describe("stylePanel()", () => {
        it("styles background panel", () => {
          instance.createPanel();
          expect(instance.stylePanel()).toBeDefined();
        });
      });

      describe("editingCellColorOption()", () => {
        it("creates panel for editing cell color option", () => {
          expect(instance.editingCellColorOption()).toBeDefined();
        });
      });

      describe("nonEditingCellColorOption()", () => {
        it("creates panel for non-editing cell color option", () => {
          expect(instance.nonEditingCellColorOption()).toBeDefined();
        });
      });
    });
  });
});
