import { Align } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Align", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Align(ui, format, container);
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