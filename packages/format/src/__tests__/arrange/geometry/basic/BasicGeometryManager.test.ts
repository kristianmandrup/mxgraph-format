import { BasicGeometryManager } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("BasicGeometryManager", () => {
  let instance, div;
  beforeEach(() => {
    instance = new BasicGeometryManager(ui, format, container);
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
