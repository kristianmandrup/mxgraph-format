import { Flip } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Flip", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Flip(ui, format, container);
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
      describe("appendVerticalBtn()", () => {
        it("appends vertical btn", () => {
          expect(() => instance.appendVerticalBtn()).not.toThrow();
        });
      });

      describe("appendHorizontalBtn()", () => {
        it("appends horizontal btn", () => {
          expect(() => instance.appendHorizontalBtn()).not.toThrow();
        });
      });

      describe("appendFlipLabel()", () => {
        it("appends flip label", () => {
          expect(() => instance.appendFlipLabel()).not.toThrow();
        });
      });

      describe("styleDiv()", () => {
        it("styles div", () => {
          expect(() => instance.styleDiv()).not.toThrow();
        });
      });

      describe("add(div)", () => {
        it("adds", () => {
          expect(() => instance.add(div)).not.toThrow();
        });
      });
    });
  });
});
