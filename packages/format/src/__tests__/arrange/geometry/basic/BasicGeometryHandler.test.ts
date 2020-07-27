import { BasicGeometryHandler } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("BasicGeometryHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new BasicGeometryHandler(ui, format, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      // cells
      // isChangedValue
      // isValidValue
      // defaultInputValue
      // isValidInput
    });

    describe("methods", () => {
      describe("addGeometryHandler(input, fn)", () => {
        it("adds geometry handler", () => {
          const input = document.createElement("input");
          const fn = () => {};
          expect(() => instance.addGeometryHandler(input, fn)).not.toThrow();
        });
      });

      describe("update(evt)", () => {
        it("updates", () => {
          const evt = { type: "x" };
          expect(() => instance.update(evt)).not.toThrow();
        });
      });

      describe("processCells()", () => {
        it("process cells", () => {
          expect(() => instance.processCells()).not.toThrow();
        });
      });

      // updateInputValue()
      // onValidInput()
      // onChangedValue()
      // setValue()
      // resetInputValue()
      // onInvalidValue()
    });
  });
});
