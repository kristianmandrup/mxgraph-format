import { StyleOps } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("StyleOps", () => {
  let instance;
  beforeEach(() => {
    instance = new StyleOps(format, editorUi, container);
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
      describe("appendEditDataBtn()", () => {
        it("appends", () => {
          expect(() => instance.appendEditDataBtn()).not.toThrow();
        });
      });

      describe("appendClearDefaultStyleBtn()", () => {
        it("appends", () => {
          expect(() => instance.appendClearDefaultStyleBtn()).not.toThrow();
        });
      });

      describe("appendDivider()", () => {
        it("appends", () => {
          expect(() => instance.appendDivider()).not.toThrow();
        });
      });

      describe("addStyleOps(div)", () => {
        it("appends", () => {
          const div = document.createElement("div");
          expect(() => instance.addStyleOps(div)).not.toThrow();
        });
      });
    });
  });
});
