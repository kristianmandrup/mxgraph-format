import { ExtraPanel } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("ExtraPanel", () => {
  let instance, div;
  beforeEach(() => {
    instance = new ExtraPanel(format, editorUi, container);
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

    describe("methods", () => {
      describe("create()", () => {
        it("creates instance", () => {
          expect(instance.create()).toBeDefined();
        });
      });
    });
  });
});
