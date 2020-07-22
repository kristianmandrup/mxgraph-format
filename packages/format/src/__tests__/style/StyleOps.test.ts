import { StyleOps } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";
import { StyleFormatPanel } from "../../style";

describe("StyleOps", () => {
  let instance, div;
  beforeEach(() => {
    instance = new StyleOps(format, editorUi, container);
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
