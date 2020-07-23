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
    });
  });
});
