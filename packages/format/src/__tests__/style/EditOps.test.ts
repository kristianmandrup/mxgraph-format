import { EditOps } from "../../";
import { editorUi as ui, format, container, editorUi } from "../mocks";
import { StyleFormatPanel } from "../../style";

describe("EditOps", () => {
  const panel = new StyleFormatPanel(format, editorUi, container);

  let instance, div;
  beforeEach(() => {
    instance = new EditOps(panel, { format, editorUi, container });
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
