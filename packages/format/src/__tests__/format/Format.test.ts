import { Format } from "../../format";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("Format", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Format(editorUi, container);
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
      describe("update(sender, evt)", () => {
        it("updates", () => {
          const sender = {};
          const evt = {};
          expect(() => instance.update(sender, evt)).not.toThrow();
        });
      });

      describe("refresh()", () => {
        it("refreshes", () => {
          expect(() => instance.refresh()).not.toThrow();
        });
      });

      describe("init()", () => {
        it("inits", () => {
          expect(() => instance.init()).not.toThrow();
        });
      });

      describe("clearSelectionState()", () => {
        it("clears selection state", () => {
          expect(() => instance.clearSelectionState()).not.toThrow();
        });
      });

      describe("getSelectionState()", () => {
        it("clears selection state", () => {
          expect(instance.getSelectionState()).toBeDefined();
        });
      });

      describe("createSelectionState()", () => {
        it("clears selection state", () => {
          expect(instance.createSelectionState()).toBeDefined();
        });
      });

      describe("initSelectionState()", () => {
        it("inits selection state", () => {
          expect(instance.initSelectionState()).toBeDefined();
        });
      });

      describe("updateSelectionStateForCell(result, cell, cells)", () => {
        it("updates selection state for cell", () => {
          const result = {};
          const cell = {};
          const cells = [{}];
          expect(() =>
            instance.updateSelectionStateForCell(result, cell, cells)
          ).not.toThrow();
        });
      });

      describe("clear()", () => {
        it("no throw", () => {
          expect(() => instance.clear()).not.toThrow();
        });

        it("to clear list of panels", () => {
          instance.clear();
          expect(instance.panels).toEqual([]);
        });
      });
    });
  });
});
