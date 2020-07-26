import { FormatOption } from "../../..";
import { editorUi as ui, format, container } from "../../mocks";

describe("FormatOption", () => {
  let instance;
  beforeEach(() => {
    instance = new FormatOption(format, ui, container);
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
      describe("createOption(label, isCheckedFn, setCheckedFn, listener)", () => {
        it("creates option", () => {
          const label = "hello";
          const isCheckedFn = () => true,
            setCheckedFn = () => {};
          const listener = () => {};
          expect(
            instance.createOption(label, isCheckedFn, setCheckedFn, listener)
          ).toBeDefined();
        });
      });
    });
  });
});
