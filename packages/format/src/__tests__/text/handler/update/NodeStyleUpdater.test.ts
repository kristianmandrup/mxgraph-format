import { UpdateCssHandler, NodeStyleUpdater } from "../../../../";
import { editorUi as ui, format, container, editorUi } from "../../../mocks";

describe("UpdateCssHandler", () => {
  let instance;
  beforeEach(() => {
    const handler = new UpdateCssHandler(format, editorUi, container);
    instance = new NodeStyleUpdater(handler);
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
