import { CellOption } from "../../..";
import { editorUi as ui, format, container } from "../../mocks";

describe("CellOption", () => {
  let instance;
  beforeEach(() => {
    instance = new CellOption(format, ui, container);
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
      describe("createCellOption(label, key, ...)", () => {
        it("creates option", () => {
          const label = "hello",
            key = "h";
          const defaultValue = "x",
            enabledValue = "X",
            disabledValue = "";

          expect(
            instance.createCellOption(
              label,
              key,
              defaultValue,
              enabledValue,
              disabledValue
            )
          ).toBeDefined();
        });
      });
    });
  });
});
