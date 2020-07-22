import { ToolbarFormatButtons } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("ToolbarFormatButtons", () => {
  let instance, div;
  beforeEach(() => {
    instance = new ToolbarFormatButtons(editorUi);
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
