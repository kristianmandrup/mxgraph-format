import { Unit } from "../../";
import { editorUi as ui, container, editorUi } from "../mocks";

describe("Unit", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Unit(editorUi, container);
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
