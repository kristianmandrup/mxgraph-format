import { EdgeManager } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("EdgeManager", () => {
  let instance;
  beforeEach(() => {
    instance = new EdgeManager(ui, format, container);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("div", () => {
        it("is set", () => {
          expect(instance.div).toBeDefined();
        });
      });

      describe("span", () => {
        it("is set", () => {
          expect(instance.span).toBeDefined();
        });
      });

      describe("divs", () => {
        it("is set", () => {
          expect(instance.divs).toBeDefined();
        });
      });

      describe("width", () => {
        it("is set", () => {
          expect(instance.width).toBeDefined();
        });
      });

      describe("xs", () => {
        it("is set", () => {
          expect(instance.xs).toBeDefined();
        });
      });

      describe("ys", () => {
        it("is set", () => {
          expect(instance.ys).toBeDefined();
        });
      });

      describe("divt", () => {
        it("is set", () => {
          expect(instance.divt).toBeDefined();
        });
      });

      describe("span1", () => {
        it("is set", () => {
          expect(instance.span1).toBeDefined();
        });
      });

      describe("span2", () => {
        it("is set", () => {
          expect(instance.span2).toBeDefined();
        });
      });

      describe("xt", () => {
        it("is set", () => {
          expect(instance.xt).toBeDefined();
        });
      });

      describe("yt", () => {
        it("is set", () => {
          expect(instance.yt).toBeDefined();
        });
      });

      describe("width2", () => {
        it("is set", () => {
          expect(instance.width2).toBeDefined();
        });
      });

      describe("height", () => {
        it("is set", () => {
          expect(instance.height).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("listener()", () => {
        it("reacts", () => {
          expect(() => instance.listener()).not.toThrow();
        });
      });

      describe("xsUpdate()", () => {
        it("updates xs", () => {
          expect(() => instance.xsUpdate()).not.toThrow();
        });
      });

      describe("ysUpdate()", () => {
        it("updates ys", () => {
          expect(() => instance.ysUpdate()).not.toThrow();
        });
      });

      describe("xtUpdate()", () => {
        it("updates xt", () => {
          expect(() => instance.xtUpdate()).not.toThrow();
        });
      });

      describe("ytUpdate()", () => {
        it("updates yt", () => {
          expect(() => instance.ytUpdate()).not.toThrow();
        });
      });
    });
  });
});
