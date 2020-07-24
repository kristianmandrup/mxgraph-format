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
  });
});
