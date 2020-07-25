import { UnitInput } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("UnitInput", () => {
  let instance, div;
  beforeEach(() => {
    instance = new UnitInput(format, editorUi, container);
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
      describe("add(...)", () => {
        it("adds", () => {
          const unit = {},
            right = 1,
            width = 100,
            update = () => {};
          expect(() =>
            instance.add(container, unit, right, width, update)
          ).not.toThrow();
        });
      });

      describe("newStepper()", () => {
        it("creates new stepper", () => {
          expect(instance.newStepper()).toBeDefined();
        });
      });

      describe("createStepper(input, update, step, height)", () => {
        it("creates new stepper", () => {
          const input = document.createElement("input");
          const update = () => {};
          const step = 2;
          const height = 10;
          expect(
            instance.createStepper(input, update, step, height)
          ).toBeDefined();
        });
      });
    });
  });
});
