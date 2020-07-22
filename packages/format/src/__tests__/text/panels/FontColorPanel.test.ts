import { FontColorPanel } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("FontColorPanel", () => {
  let instance, div;
  beforeEach(() => {
    instance = new FontColorPanel(format, editorUi, container);
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
  });
});
