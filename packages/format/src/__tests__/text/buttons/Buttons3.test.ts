import { Buttons3 } from "../../..";
import { editorUi as ui, editorUi } from "../../mocks";

describe("Buttons3", () => {
  let instance;
  beforeEach(() => {
    instance = new Buttons3(editorUi);
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
