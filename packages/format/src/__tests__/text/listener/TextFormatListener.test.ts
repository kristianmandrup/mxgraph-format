import { TextFormatListener } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("TextFormatListener", () => {
  let instance, div;
  beforeEach(() => {
    instance = new TextFormatListener();
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
