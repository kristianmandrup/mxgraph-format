import { GeometryHandler } from "../../..";
import { editorUi as ui, format, container } from "../../mocks";

describe("GeometryHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new GeometryHandler(ui, format, container);
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
      describe("createBasicGeometryHandler()", () => {
        it("creates geo handler", () => {
          expect(instance.createBasicGeometryHandler()).toBeDefined();
        });
      });

      describe("createEdgeGeometryHandler()", () => {
        it("creates geo edge handler", () => {
          expect(instance.createEdgeGeometryHandler()).toBeDefined();
        });
      });

      describe("addGeometryHandler(input, fn)", () => {
        it("adds geo handler", () => {
          const input = document.createElement("input"),
            fn = () => {};
          expect(instance.addGeometryHandler(input, fn)).toBeDefined();
        });
      });

      describe("addEdgeGeometryHandler(input, fn)", () => {
        it("adds geo edge handler", () => {
          const input = document.createElement("input"),
            fn = () => {};
          expect(instance.addEdgeGeometryHandler(input, fn)).toBeDefined();
        });
      });
    });
  });
});
