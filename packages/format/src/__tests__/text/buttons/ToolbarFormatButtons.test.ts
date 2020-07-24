import { ToolbarFormatButtons } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("ToolbarFormatButtons", () => {
  let instance, div;
  beforeEach(() => {
    instance = new ToolbarFormatButtons(editorUi);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("graph", () => {
        it("is set", () => {
          expect(instance.graph).toBeDefined();
        });
      });

      describe("toolbar", () => {
        it("is set", () => {
          expect(instance.toolbar).toBeDefined();
        });
      });

      describe("insertPanel", () => {
        it("is set", () => {
          expect(instance.insertPanel).toBeDefined();
        });
      });

      describe("styleButtons", () => {
        it("is set", () => {
          expect(instance.styleButtons).toBeDefined();
        });
      });

      describe("currentTable", () => {
        it("is set", () => {
          expect(instance.currentTable).toBeDefined();
        });
      });

      describe("tableCell", () => {
        it("is set", () => {
          expect(instance.tableCell).toBeDefined();
        });
      });

      describe("tablePanel", () => {
        it("is set", () => {
          expect(instance.tablePanel).toBeDefined();
        });
      });

      describe("tablePanel2", () => {
        it("is set", () => {
          expect(instance.tablePanel2).toBeDefined();
        });
      });

      describe("tableRow", () => {
        it("is set", () => {
          expect(instance.tableRow).toBeDefined();
        });
      });

      describe("tmp", () => {
        it("is set", () => {
          expect(instance.tableRow).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("createFilenameDialog()", () => {
        it("creates instance", () => {
          const name = "x";
          expect(instance.createFilenameDialog(name)).toBeDefined();
        });
      });

      describe("addAll()", () => {
        it("adds all buttons", () => {
          expect(() => instance.addAll()).not.toThrow();
        });
      });

      describe("addBtns()", () => {
        it("adds buttons", () => {
          expect(() => instance.addBtns()).not.toThrow();
        });
      });

      describe("addBtns1()", () => {
        it("adds 1st buttons", () => {
          expect(() => instance.addBtns1()).not.toThrow();
        });
      });

      describe("addBtns2()", () => {
        it("adds 2nd buttons", () => {
          expect(() => instance.addBtns2()).not.toThrow();
        });
      });

      describe("addBtns3()", () => {
        it("adds 3rd buttons", () => {
          expect(() => instance.addBtns3()).not.toThrow();
        });
      });

      describe("addBtns4()", () => {
        it("adds 4th buttons", () => {
          expect(() => instance.addBtns4()).not.toThrow();
        });
      });
    });
  });
});
