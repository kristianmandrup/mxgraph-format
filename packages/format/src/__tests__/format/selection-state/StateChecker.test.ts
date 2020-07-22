import { StateChecker } from "../../../";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("StateChecker", () => {
  let instance, div;
  beforeEach(() => {
    instance = new StateChecker(format, editorUi, container);
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
