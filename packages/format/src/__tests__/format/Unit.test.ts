import { Unit } from "../../";
import { editorUi as ui, container, editorUi } from "../mocks";

describe("Unit", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Unit(editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("unit", () => {
        it("is mm", () => {
          expect(instance.unit).toEqual("mm");
        });
      });

      describe("isFloatUnit", () => {
        it("is false", () => {
          expect(instance.isFloatUnit).toBeFalsy();
        });
      });

      describe("unitStep", () => {
        it("is 0.5", () => {
          expect(instance.unitStep).toEqual(0.5);
        });
      });
    });

    describe("methods", () => {
      describe("inUnit(pixels)", () => {
        it("is < 100", () => {
          const pixels = 100;
          expect(instance.inUnit(pixels)).toBeLessThan(100);
        });
      });

      describe("fromUnit(value)", () => {
        it("is > 100", () => {
          const value = 100;
          expect(instance.fromUnit(value)).toBeGreaterThan(100);
        });
      });
    });
  });
});
