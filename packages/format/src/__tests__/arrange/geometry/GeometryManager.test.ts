import { GeometryManager } from "../../..";
import { editorUi as ui, format, container } from "../../mocks";

describe("GeometryManager", () => {
  let instance, div;
  beforeEach(() => {
    instance = new GeometryManager(ui, format, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      // edgeGeometryManager: any;
      // basicGeometryManager: any;
    });

    describe("methods", () => {
      describe("createEdgeGeometryManager()", () => {
        it("creates instance", () => {
          expect(instance.createEdgeGeometryManager()).toBeDefined();
        });
      });

      describe("createBasicGeometryManager()", () => {
        it("creates instance", () => {
          expect(instance.createBasicGeometryManager()).toBeDefined();
        });
      });

      describe("addGeometry(container)", () => {
        it("adds geo to container", () => {
          expect(instance.addGeometry(container)).toBeDefined();
        });
      });

      describe("addEdgeGeometry(container)", () => {
        it("adds edge geo to container", () => {
          expect(instance.addEdgeGeometry(container)).toBeDefined();
        });
      });
    });
  });
});
