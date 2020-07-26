import { Group } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Group", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Group(ui, format, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("cell", () => {
        it("is set", () => {
          expect(instance.cell).toBeDefined();
        });
      });

      describe("multiSelected", () => {
        it("is false", () => {
          expect(instance.multiSelected).toBeFalsy();
        });
      });

      describe("editorUi", () => {
        it("is false", () => {
          expect(instance.isSingleSelected).toBeFalsy();
        });
      });
    });

    describe("methods", () => {
      describe("styleDiv()", () => {
        it("style div", () => {
          expect(() => instance.styleDiv()).not.toThrow();
        });
      });

      describe("onMultiSelect()", () => {
        it("no throw", () => {
          expect(() => instance.onMultiSelect()).not.toThrow();
        });
      });

      describe("onSingleSelect()", () => {
        it("no throw", () => {
          expect(() => instance.onSingleSelect()).not.toThrow();
        });
      });

      describe("onHasVertices()", () => {
        it("no throw", () => {
          expect(() => instance.onHasVertices()).not.toThrow();
        });
      });

      describe("onSelected()", () => {
        it("no throw", () => {
          expect(() => instance.onSelected()).not.toThrow();
        });
      });

      describe("onSingleSelectAndVertex()", () => {
        it("no throw", () => {
          expect(() => instance.onSingleSelectAndVertex()).not.toThrow();
        });
      });

      describe("appendEditDataBtn()", () => {
        it("appends edit data button", () => {
          expect(() => instance.appendEditDataBtn()).not.toThrow();
        });
      });

      describe("appendEditLinkBtn()", () => {
        it("appends edit link button", () => {
          expect(() => instance.appendEditLinkBtn()).not.toThrow();
        });
      });

      describe("onOneSelected()", () => {
        it("no throw", () => {
          expect(() => instance.onOneSelected()).not.toThrow();
        });
      });

      describe("add(div)", () => {
        it("adds", () => {
          expect(() => instance.add(div)).not.toThrow();
        });
      });

      describe("hideDivIfNone()", () => {
        it("hides div", () => {
          expect(() => instance.hideDivIfNone()).not.toThrow();
        });
      });
    });
  });
});
