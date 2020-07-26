import { Layer } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Layer", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Layer(ui, format, container);
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
      describe("appendToFrontBtn()", () => {
        it("append to front btn", () => {
          expect(instance.appendToFrontBtn()).toBeDefined();
        });
      });

      describe("appendToBackBtn()", () => {
        it("append to back btn", () => {
          expect(instance.appendToBackBtn()).toBeDefined();
        });
      });
    });
  });
});
