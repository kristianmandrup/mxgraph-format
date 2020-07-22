import { Effects } from "../../";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("Effects", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Effects(format, editorUi, container);
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
  });
});
