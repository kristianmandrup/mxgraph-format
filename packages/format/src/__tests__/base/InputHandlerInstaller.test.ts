import { InputHandlerInstaller } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("InputHandlerInstaller", () => {
  let instance, div;
  beforeEach(() => {
    instance = new InputHandlerInstaller(format, editorUi, container);
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
      describe("install(input, key, defaultValue, min, max, unit)", () => {
        it("installs input handler", () => {
          const input = document.createElement("input");
          const key = "x",
            defaultValue = 0,
            min = 0,
            max = 10,
            unit = "mm";

          expect(
            instance.install(input, key, defaultValue, min, max, unit)
          ).toBeDefined();
        });
      });
    });
  });
});
