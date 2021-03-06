import { PositionChangeListener } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("PositionChangeListener", () => {
  let instance, div;
  beforeEach(() => {
    instance = new PositionChangeListener(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      // positionSelect: any;
    });

    describe("methods", () => {
      describe("add()", () => {
        it("adds listener", () => {
          expect(instance.add()).toBe(ui);
        });
      });
    });
  });
});
