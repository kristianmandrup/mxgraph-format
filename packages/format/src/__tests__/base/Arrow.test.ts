import { Arrow } from "../..";
import { editorUi as ui, format, container } from "../mocks";

describe("Arrow", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Arrow();
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
