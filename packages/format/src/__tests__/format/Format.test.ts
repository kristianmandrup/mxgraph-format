import { Format } from "../../format";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("Format", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Format(editorUi, container);
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
