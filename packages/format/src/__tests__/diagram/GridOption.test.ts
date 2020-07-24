import { GridOption } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("GridOption", () => {
  let instance;
  beforeEach(() => {
    instance = new GridOption(format, editorUi, container);
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
      describe("update()", () => {
        it("updates", () => {
          expect(instance.update()).toBeDefined();
        });
      });

      // REFACTOR
      describe("add()", () => {
        it("adds", () => {
          expect(instance.add()).toBeDefined();
        });
      });
    });
  });
});
