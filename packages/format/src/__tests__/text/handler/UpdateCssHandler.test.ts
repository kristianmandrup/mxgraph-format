import { UpdateCssHandler } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("UpdateCssHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new UpdateCssHandler(format, editorUi, container);
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
