import { Buttons2 } from "../../..";
import { editorUi as ui, editorUi } from "../../mocks";

describe("Buttons2", () => {
  let instance;
  beforeEach(() => {
    instance = new Buttons2(editorUi);
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
      describe("add()", () => {
        it("adds buttons", () => {
          expect(instance.add()).toBeDefined();
        });
      });
    });
  });
});
