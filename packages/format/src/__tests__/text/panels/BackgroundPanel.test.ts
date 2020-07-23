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
    });

    describe("methods", () => {
      describe("create()", () => {
        it("creates background panel", () => {
          expect(instance.create()).toBeDefined();
        });
      });
    });
  });
});
