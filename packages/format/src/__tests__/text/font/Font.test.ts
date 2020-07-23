import { Font } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("Font", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Font(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("dirSet", () => {
        it("is set", () => {
          expect(instance.dirSet).toBeDefined();
        });
      });

      describe("dirs", () => {
        it("is set", () => {
          expect(instance.dirs).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("addFont(container)", () => {
        it("adds font panel to container", () => {
          const container = document.createElement("div");
          expect(instance.addFont(container)).toBeDefined();
        });
      });
    });
  });
});
