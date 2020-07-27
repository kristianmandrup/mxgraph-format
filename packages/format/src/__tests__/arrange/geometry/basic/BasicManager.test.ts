import { BasicManager } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("BasicManager", () => {
  let instance, div;
  beforeEach(() => {
    instance = new BasicManager(ui, format, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("rect", () => {
        it("is set", () => {
          expect(instance.rect).toBeDefined();
        });
      });

      describe("leftUpdate", () => {
        it("is set", () => {
          expect(instance.leftUpdate).toBeDefined();
        });
      });

      describe("topUpdate", () => {
        it("is set", () => {
          expect(instance.topUpdate).toBeDefined();
        });
      });

      describe("span", () => {
        it("is set", () => {
          expect(instance.span).toBeDefined();
        });
      });

      describe("span2", () => {
        it("is set", () => {
          expect(instance.span2).toBeDefined();
        });
      });

      describe("div2", () => {
        it("is set", () => {
          expect(instance.div2).toBeDefined();
        });
      });

      describe("left", () => {
        it("is set", () => {
          expect(instance.left).toBeDefined();
        });
      });

      describe("top", () => {
        it("is set", () => {
          expect(instance.top).toBeDefined();
        });
      });

      describe("div", () => {
        it("is set", () => {
          expect(instance.div).toBeDefined();
        });
      });

      describe("width", () => {
        it("is set", () => {
          expect(instance.width).toBeDefined();
        });
      });

      describe("height", () => {
        it("is set", () => {
          expect(instance.height).toBeDefined();
        });
      });

      describe("autosizeBtn", () => {
        it("is set", () => {
          expect(instance.autosizeBtn).toBeDefined();
        });
      });

      describe("wrapper", () => {
        it("is set", () => {
          expect(instance.wrapper).toBeDefined();
        });
      });

      describe("widthUpdate", () => {
        it("is set", () => {
          expect(instance.widthUpdate).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("listener(sender?, evt?, force?)", () => {
        it("reacts", () => {
          expect(() => instance.listener()).not.toThrow();
        });
      });

      describe("setChangeListener()", () => {
        it("sets", () => {
          expect(() => instance.setChangeListener()).not.toThrow();
        });
      });
    });
  });
});
