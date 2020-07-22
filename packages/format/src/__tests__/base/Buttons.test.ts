import { Buttons } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("Buttons", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Buttons();
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
