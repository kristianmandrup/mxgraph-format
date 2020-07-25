import { Stepper } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("Stepper", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Stepper(format, editorUi, container);
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
      describe("create", () => {
        it("creates new stepper", () => {
          expect(instance.create()).toBeDefined();
        });
      });
    });
  });
});
