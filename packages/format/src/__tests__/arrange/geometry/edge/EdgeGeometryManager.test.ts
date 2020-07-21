import { EdgeGeometryManager } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("EdgeGeometryManager", () => {
  let instance, div;
  beforeEach(() => {
    instance = new EdgeGeometryManager(ui, format, container);
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
