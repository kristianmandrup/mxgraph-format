import { PanelInit } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Init", () => {
  let instance, div;
  beforeEach(() => {
    instance = new PanelInit(ui, format, container);
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
