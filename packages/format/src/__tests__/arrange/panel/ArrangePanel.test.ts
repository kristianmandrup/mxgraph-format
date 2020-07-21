import { ArrangePanel } from "../../..";
import { editorUi as ui, format, container } from "../../mocks";

describe("ArrangePanel", () => {
  let instance, div;
  beforeEach(() => {
    instance = new ArrangePanel(ui, format, container);
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

    // expect(() => instance.add(container)).not.toThrow();
    describe("methods", () => {
      describe("createGeometryManager()", () => {
        it("creates GeometryManager", () => {
          expect(instance.createGeometryManager()).toBeDefined();
        });
      });

      describe("addGeometry()", () => {
        it("adds geometry", () => {
          expect(instance.addGeometry()).toBeDefined();
        });
      });

      describe("addEdgeGeometry()", () => {
        it("adds edge geometry", () => {
          expect(instance.addEdgeGeometry()).toBeDefined();
        });
      });

      describe("init()", () => {
        it("initializes", () => {
          expect(instance.init()).toBeDefined();
        });
      });

      describe("addTable(div)", () => {
        it("initializes", () => {
          expect(instance.addTable(div)).toBeDefined();
        });
      });

      describe("createTable()", () => {
        it("initializes", () => {
          expect(instance.createTable()).toBeDefined();
        });
      });

      describe("addLayerOps(div)", () => {
        it("initializes", () => {
          expect(instance.addLayerOps(div)).toBeDefined();
        });
      });

      describe("addGroupOps(div)", () => {
        it("initializes", () => {
          expect(instance.addGroupOps(div)).toBeDefined();
        });
      });

      describe("addAlign(div)", () => {
        it("initializes", () => {
          expect(instance.addAlign(div)).toBeDefined();
        });
      });

      describe("addFlip(div)", () => {
        it("initializes", () => {
          expect(instance.addFlip(div)).toBeDefined();
        });
      });

      describe("addDistribute(div)", () => {
        it("initializes", () => {
          expect(instance.addDistribute(div)).toBeDefined();
        });
      });

      describe("addAngle(div)", () => {
        it("initializes", () => {
          expect(instance.addAngle(div)).toBeDefined();
        });
      });
    });
  });
});
