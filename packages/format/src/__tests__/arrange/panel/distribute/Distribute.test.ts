import { Distribute } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Distribute", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Distribute(ui, format, container);
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
        it("adds", () => {
          expect(() => instance.add(div)).not.toThrow();
        });
      });

      describe("appendTitle()", () => {
        it("adds title", () => {
          expect(() => instance.appendTitle()).not.toThrow();
        });
      });

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
    });
  });
});
