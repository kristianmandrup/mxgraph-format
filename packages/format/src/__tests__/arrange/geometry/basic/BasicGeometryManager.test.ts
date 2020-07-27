import { BasicGeometryManager } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("BasicGeometryManager", () => {
  let instance;
  beforeEach(() => {
    instance = new BasicGeometryManager(ui, format, container);
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
      describe("addGeometry(container)", () => {
        it("adds geometry to container", () => {
          expect(() => instance.addGeometry(container)).not.toThrow();
        });
      });

      describe("appendDiv(container)", () => {
        it("append div to container", () => {
          expect(() => instance.appendDiv(container)).not.toThrow();
        });
      });

      describe("appendDiv2(container)", () => {
        it("append div2 to container", () => {
          expect(() => instance.appendDiv2(container)).not.toThrow();
        });
      });
    });
  });
});
