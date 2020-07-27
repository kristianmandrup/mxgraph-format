import { ColorOption } from "../../..";
import { editorUi as ui, format, container } from "../../mocks";

describe("ColorOption", () => {
  let instance;
  beforeEach(() => {
    instance = new ColorOption(format, ui, container);
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
      describe("createColorOption(label, ...)", () => {
        it("creates color option", () => {
          const label = "hello";
          const getColorFn = () => true,
            setColorFn = () => {};
          const defaultColor = "black";
          const listener = () => {};
          expect(
            instance.createColorOption(
              label,
              getColorFn,
              setColorFn,
              defaultColor,
              listener
            )
          ).toBeDefined();
        });

        // createDiv()
        // createCheckbox()
        // appendCheckbox()
        // appendSpan()
        // appendBtn()
        // apply(color, disableUpdate?, forceUpdate?)
      });
    });
  });
});
