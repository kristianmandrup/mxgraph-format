import { InputHandler } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("InputHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new InputHandler(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      // input: any;
      // installInputHandler: any;
      // defaultFontSize: any;
      // pendingFontSize: any;
    });

    describe("methods", () => {
      describe("create()", () => {
        it("creates input handler", () => {
          expect(instance.create()).toBeDefined();
        });
      });
    });
  });
});
