import { PanelOptions } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("PanelOptions", () => {
  let instance, div;
  beforeEach(() => {
    instance = new PanelOptions(format, editorUi, container);
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
      describe("add(div)", () => {
        it("adds all", () => {
          expect(instance.add(div)).toBeDefined();
        });
      });

      describe("addConnectionPoints(div)", () => {
        it("adds connection points", () => {
          expect(instance.addConnectionPoints(div)).toBeDefined();
        });
      });

      describe("addConnectionArrows(div)", () => {
        it("adds connection arrows", () => {
          expect(instance.addConnectionArrows(div)).toBeDefined();
        });
      });

      describe("addGuides(div)", () => {
        it("adds guides", () => {
          expect(instance.addGuides(div)).toBeDefined();
        });
      });
    });
  });
});
