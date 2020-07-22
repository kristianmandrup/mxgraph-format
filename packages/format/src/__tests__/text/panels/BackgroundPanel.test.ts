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

      // currentBgColor: any;
      // bgColorApply: any;
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
