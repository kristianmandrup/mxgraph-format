import { LineJumps } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";
import { StyleFormatPanel } from "../../style";

describe("LineJumps", () => {
  let instance, div;
  beforeEach(() => {
    instance = new LineJumps(format, editorUi, container);
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
