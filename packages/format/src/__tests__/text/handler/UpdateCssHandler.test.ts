import { UpdateCssHandler } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("UpdateCssHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new UpdateCssHandler(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("setSelected", () => {
        it("is set", () => {
          expect(instance.setSelected).toBeDefined();
        });
      });

      describe("fontStyleItems", () => {
        it("is set", () => {
          expect(instance.fontStyleItems).toBeDefined();
        });
      });

      describe("sup", () => {
        it("is set", () => {
          expect(instance.sup).toBeDefined();
        });
      });

      describe("sub", () => {
        it("is set", () => {
          expect(instance.sub).toBeDefined();
        });
      });

      describe("full", () => {
        it("is set", () => {
          expect(instance.full).toBeDefined();
        });
      });

      describe("left", () => {
        it("is set", () => {
          expect(instance.left).toBeDefined();
        });
      });

      describe("center", () => {
        it("is set", () => {
          expect(instance.center).toBeDefined();
        });
      });

      describe("right", () => {
        it("is set", () => {
          expect(instance.right).toBeDefined();
        });
      });

      describe("right", () => {
        it("is set", () => {
          expect(instance.right).toBeDefined();
        });
      });
      describe("currentTable", () => {
        it("is set", () => {
          expect(instance.currentTable).toBeDefined();
        });
      });
      describe("tableRow", () => {
        it("is set", () => {
          expect(instance.tableRow).toBeDefined();
        });
      });
      describe("tableCell", () => {
        it("is set", () => {
          expect(instance.tableCell).toBeDefined();
        });
      });
      describe("tableWrapper", () => {
        it("is set", () => {
          expect(instance.tableWrapper).toBeDefined();
        });
      });
      describe("pendingFontSize", () => {
        it("is set", () => {
          expect(instance.pendingFontSize).toBeDefined();
        });
      });

      describe("input", () => {
        it("is set", () => {
          expect(instance.input).toBeDefined();
        });
      });

      describe("lineHeightInput", () => {
        it("is set", () => {
          expect(instance.lineHeightInput).toBeDefined();
        });
      });

      describe("fontMenu", () => {
        it("is set", () => {
          expect(instance.fontMenu).toBeDefined();
        });
      });

      describe("currentFontColor", () => {
        it("is set", () => {
          expect(instance.currentFontColor).toBeDefined();
        });
      });

      describe("fontColorApply", () => {
        it("is set", () => {
          expect(instance.fontColorApply).toBeDefined();
        });
      });

      describe("currentBgColor", () => {
        it("is set", () => {
          expect(instance.currentBgColor).toBeDefined();
        });
      });

      describe("bgColorApply", () => {
        it("is set", () => {
          expect(instance.bgColorApply).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("create()", () => {
        it("creates update css handler", () => {
          expect(instance.create()).toBeDefined();
        });
      });

      // TODO: REFACTOR
      describe("updateCssHandler()", () => {
        it("update css handler", () => {
          expect(instance.updateCssHandler()).toBeDefined();
        });
      });
    });
  });
});
