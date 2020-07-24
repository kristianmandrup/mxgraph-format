import { InputHandler, FontSizeHandler } from "../../../../";
import { editorUi as ui, format, container, editorUi } from "../../../mocks";

describe("UpdateCssHandler", () => {
  let instance;
  const handler = new InputHandler(format, ui, container);
  const fontSize = 14;
  beforeEach(() => {
    instance = new FontSizeHandler(handler, fontSize);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("handler", () => {
        it("is set", () => {
          expect(instance.handler).toBe(handler);
        });
      });

      describe("fontSize", () => {
        it("is set", () => {
          expect(instance.fontSize).toBe(fontSize);
        });
      });
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
