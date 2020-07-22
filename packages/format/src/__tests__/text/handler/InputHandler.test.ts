import { InputHandler } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("InputHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new InputHandler(format, editorUi, container);
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
