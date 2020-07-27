import { EdgeGeometryHandler } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("EdgeGeometryHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new EdgeGeometryHandler(ui, format, container);
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

    describe("methods", () => {
      describe("addEdgeGeometryHandler(input, fn)", () => {
        it("adds handler", () => {
          const input = document.createElement("input");
          const fn = () => {};
          expect(() =>
            instance.addEdgeGeometryHandler(input, fn)
          ).not.toThrow();
        });
      });
    });
  });
});
