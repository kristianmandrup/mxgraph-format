import { NoSelectionManager } from "../../..";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("NoSelectionManager", () => {
  let instance, div;
  beforeEach(() => {
    instance = new NoSelectionManager(format, editorUi, container);
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
