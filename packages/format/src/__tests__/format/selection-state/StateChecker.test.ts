import { StateChecker } from "../../../";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("StateChecker", () => {
  let instance, div;
  beforeEach(() => {
    instance = new StateChecker(format, editorUi, container);
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
      describe("isFillState(state)", () => {
        it("is false", () => {
          const state = {};
          expect(instance.isFillState(state)).toBeFalsy();
        });
      });

      describe("isGlassState(state)", () => {
        it("is false", () => {
          const state = {};
          expect(instance.isGlassState(state)).toBeFalsy();
        });
      });

      describe("isRoundedState(state)", () => {
        it("is false", () => {
          const state = {};
          expect(instance.isRoundedState(state)).toBeFalsy();
        });
      });

      describe("isLineJumpState(state)", () => {
        it("is false", () => {
          const state = {};
          expect(instance.isLineJumpState(state)).toBeFalsy();
        });
      });

      describe("isComicState(state)", () => {
        it("is false", () => {
          const state = {};
          expect(instance.isComicState(state)).toBeFalsy();
        });
      });

      describe("isAutoSizeState(state)", () => {
        it("is false", () => {
          const state = {};
          expect(instance.isAutoSizeState(state)).toBeFalsy();
        });
      });

      describe("isImageState(state)", () => {
        it("is false", () => {
          const state = {};
          expect(instance.isImageState(state)).toBeFalsy();
        });
      });

      describe("isShadowState(state)", () => {
        it("is false", () => {
          const state = {};
          expect(instance.isShadowState(state)).toBeFalsy();
        });
      });
    });
  });
});
