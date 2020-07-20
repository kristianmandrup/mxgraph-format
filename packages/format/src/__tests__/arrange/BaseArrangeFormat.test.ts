import { BaseArrangeFormat } from "../../";
import { editorUi as ui, format, container } from "../mocks";

describe("BaseArrangeFormat", () => {
  let instance;
  beforeEach(() => {
    instance = new BaseArrangeFormat(ui, format, container);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("ss", () => {
        it("is set", () => {
          expect(instance.ss).toBeDefined();
        });
      });

      describe("editor", () => {
        it("is set", () => {
          expect(instance.editor).toBeDefined();
        });
      });

      describe("graph", () => {
        it("is set", () => {
          expect(instance.graph).toBeDefined();
        });
      });
    });
  });
});
