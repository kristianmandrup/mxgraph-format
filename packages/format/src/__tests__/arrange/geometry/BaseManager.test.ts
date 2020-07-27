import { BaseManager } from "../../..";
import { editorUi as ui, format, container } from "../../mocks";

describe("BaseManager", () => {
  let instance, div;
  beforeEach(() => {
    instance = new BaseManager(ui, format, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("rect", () => {
        it("is set", () => {
          expect(instance.rect).toBeDefined();
        });
      });

      describe("opt", () => {
        it("is set", () => {
          expect(instance.opt).toBeDefined();
        });
      });

      describe("constrainCheckbox", () => {
        it("is set", () => {
          expect(instance.constrainCheckbox).toBeDefined();
        });
      });

      describe("heightUpdate", () => {
        it("is set", () => {
          expect(instance.heightUpdate).toBeDefined();
        });
      });

      describe("flexArrowWidth", () => {
        it("is set", () => {
          expect(instance.flexArrowWidth).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("widthUpdate(evt?)", () => {
        it("updates width", () => {
          expect(() => instance.widthUpdate()).not.toThrow();
        });
      });
    });
  });
});
