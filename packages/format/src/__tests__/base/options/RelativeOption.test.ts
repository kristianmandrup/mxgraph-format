import { RelativeOption } from "../../..";
import { editorUi as ui, format, container } from "../../mocks";

describe("RelativeOption", () => {
  let instance;
  beforeEach(() => {
    instance = new RelativeOption(format, ui, container);
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
      describe("create(label, key)", () => {
        it("creates option", () => {
          const label = "hello",
            key = "h";
          expect(instance.create(label, key)).toBeDefined();
        });
      });
    });
  });
});
