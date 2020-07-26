import { Align } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Align", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Align(ui, format, container);
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

      describe("styleDiv()", () => {
        it("styles div", () => {
          expect(() => instance.styleDiv()).not.toThrow();
        });
      });

      describe("appendTitle()", () => {
        it("appends title to div", () => {
          expect(() => instance.appendTitle()).not.toThrow();
        });
      });

      describe("createStylePanel()", () => {
        it("creates styled panel", () => {
          expect(() => instance.createStylePanel()).not.toThrow();
        });
      });

      describe("addButtons()", () => {
        it("adds buttons for all alignment directions", () => {
          expect(() => instance.addButtons()).not.toThrow();
        });
      });

      describe("addLeftBtn()", () => {
        it("adds left button", () => {
          expect(() => instance.addLeftBtn()).not.toThrow();
        });
      });

      describe("addRightBtn()", () => {
        it("adds right button", () => {
          expect(() => instance.addRightBtn()).not.toThrow();
        });
      });

      describe("addCenterBtn()", () => {
        it("adds center button", () => {
          expect(() => instance.addCenterBtn()).not.toThrow();
        });
      });

      describe("addTopBtn()", () => {
        it("adds top button", () => {
          expect(() => instance.addTopBtn()).not.toThrow();
        });
      });

      describe("addMiddleBtn()", () => {
        it("adds middle button", () => {
          expect(() => instance.addMiddleBtn()).not.toThrow();
        });
      });

      describe("addBottomBtn()", () => {
        it("adds bottom button", () => {
          expect(() => instance.addBottomBtn()).not.toThrow();
        });
      });

      describe("addStyleButtons()", () => {
        it("adds style buttons", () => {
          expect(() => instance.addStyleButtons()).not.toThrow();
        });
      });

      describe("appendStylePanel()", () => {
        it("appends style buttons", () => {
          expect(() => instance.appendStylePanel()).not.toThrow();
        });
      });
    });
  });
});
