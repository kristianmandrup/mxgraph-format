import { EdgeListener } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("EdgeListener", () => {
  let instance, div;
  beforeEach(() => {
    instance = new EdgeListener(ui, format, container);
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
      describe("handler(sender, evt, force)", () => {
        it("reacts", () => {
          expect(() => instance.handler()).not.toThrow();
        });
      });
    });
  });
});
