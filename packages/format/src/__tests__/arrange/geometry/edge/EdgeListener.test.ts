import { EdgeListener } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("EdgeListener", () => {
  let instance, div;
  beforeEach(() => {
    instance = new EdgeListener(ui, format, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("cell", () => {
        it("is set", () => {
          expect(instance.cell).toBeDefined();
        });
      });

      describe("shape", () => {
        it("is set", () => {
          expect(instance.shape).toBeDefined();
        });
      });

      describe("geo", () => {
        it("is set", () => {
          expect(instance.geo).toBeDefined();
        });
      });

      describe("shouldUpdateWidth", () => {
        it("is false", () => {
          expect(instance.shouldUpdateWidth).toBeFalsy();
        });
      });

      describe("selectionCount", () => {
        it("is 1", () => {
          expect(instance.selectionCount).toEqual(1);
        });
      });

      describe("isValidTargetPoint", () => {
        it("is false", () => {
          expect(instance.isValidTargetPoint).toBeFalsy();
        });
      });

      describe("isValidSourcePoint", () => {
        it("is false", () => {
          expect(instance.isValidSourcePoint).toBeFalsy();
        });
      });

      describe("isSelectedEdgeCell", () => {
        it("is false", () => {
          expect(instance.isSelectedEdgeCell).toBeFalsy();
        });
      });
    });

    describe("methods", () => {
      describe("handler(sender, evt, force)", () => {
        it("reacts", () => {
          expect(() => instance.handler()).not.toThrow();
        });
      });

      describe("updateWidth()", () => {
        it("updates width", () => {
          expect(() => instance.updateWidth()).not.toThrow();
        });
      });

      describe("hideAll()", () => {
        it("hides source and target divs", () => {
          expect(() => instance.hideAll()).not.toThrow();
        });
      });

      describe("hideSourceDiv()", () => {
        it("hides source div", () => {
          expect(() => instance.hideSourceDiv()).not.toThrow();
        });
      });

      describe("hideTargetDiv()", () => {
        it("hides target div", () => {
          expect(() => instance.hideTargetDiv()).not.toThrow();
        });
      });

      describe("onSelectedEdgeCell()", () => {
        it("sets source and target points for selected cell", () => {
          expect(() => instance.onSelectedEdgeCell()).not.toThrow();
        });
      });

      describe("setSource()", () => {
        it("sets source", () => {
          expect(() => instance.setSource()).not.toThrow();
        });
      });

      describe("setTarget()", () => {
        it("sets target", () => {
          expect(() => instance.setTarget()).not.toThrow();
        });
      });

      describe("setSourcePoint()", () => {
        it("sets source point for selected cell", () => {
          expect(() => instance.setSourcePoint()).not.toThrow();
        });
      });

      describe("setTargetPoint()", () => {
        it("sets target point for selected cell", () => {
          expect(() => instance.setTargetPoint()).not.toThrow();
        });
      });
    });
  });
});
