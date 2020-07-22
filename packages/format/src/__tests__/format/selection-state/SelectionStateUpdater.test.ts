import { SelectionStateUpdater } from "../../..";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("SelectionStateUpdater", () => {
  let instance, div;
  beforeEach(() => {
    instance = new SelectionStateUpdater(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("hasWidth", () => {
        it("is true", () => {
          expect(instance.hasWidth).toBeTruthy();
        });
      });

      describe("hasHeight", () => {
        it("is true", () => {
          expect(instance.hasHeight).toBeTruthy();
        });
      });

      describe("shouldAdjustOffset", () => {
        it("is false", () => {
          expect(instance.shouldAdjustOffset).toBeFalsy();
        });
      });
    });

    describe("methods", () => {
      describe("isVertex(cell)", () => {
        it("is false", () => {
          const cell = {};
          expect(instance.isVertex(cell)).toBeFalsy();
        });
      });

      describe("isEdgeCell(cell)", () => {
        it("is false", () => {
          const cell = {};
          expect(instance.isEdgeCell(cell)).toBeFalsy();
        });
      });

      describe("onVertexCell()", () => {
        it("no throw", () => {
          expect(() => instance.onVertexCell()).not.toThrow();
        });
      });

      describe("adjustWidth()", () => {
        it("adjusts width - no throw", () => {
          expect(() => instance.adjustWidth()).not.toThrow();
        });
      });

      describe("adjustHeight()", () => {
        it("adjusts height - no throw", () => {
          expect(() => instance.adjustHeight()).not.toThrow();
        });
      });

      describe("adjustOffset()", () => {
        it("adjusts offset - no throw", () => {
          expect(() => instance.adjustOffset()).not.toThrow();
        });
      });

      describe("onEdgeCell()", () => {
        it("no throw", () => {
          expect(() => instance.onEdgeCell()).not.toThrow();
        });
      });

      describe("updateSelectionStateForCell(result, cell, cells)", () => {
        it("updatest selection state for cell - no throw", () => {
          const result = {},
            cell = {},
            cells = [{}];
          expect(() =>
            instance.updateSelectionStateForCell(result, cell, cells)
          ).not.toThrow();
        });
      });

      describe("setResult(state)", () => {
        it("sets result using state - no throw", () => {
          const state = {};
          expect(() => instance.setResult(state)).not.toThrow();
        });
      });
    });
  });
});
