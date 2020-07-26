import { PanelInit } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Init", () => {
  let instance, div;
  beforeEach(() => {
    instance = new PanelInit(ui, format, container);
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
      describe("init()", () => {
        it("initializes", () => {
          expect(() => instance.init()).not.toThrow();
        });
      });

      describe("appendStyleFormat()", () => {
        it("appends style format", () => {
          expect(() => instance.appendStyleFormat()).not.toThrow();
        });
      });

      describe("appendGroup()", () => {
        it("appends group", () => {
          expect(() => instance.appendGroup()).not.toThrow();
        });
      });

      describe("appendAngle()", () => {
        it("appends group", () => {
          expect(() => instance.appendAngle()).not.toThrow();
        });
      });

      describe("appendGeometry()", () => {
        it("appends geometry", () => {
          expect(() => instance.appendGeometry()).not.toThrow();
        });
      });

      describe("appendFlip()", () => {
        it("appends flip", () => {
          expect(() => instance.appendFlip()).not.toThrow();
        });
      });

      describe("appendLayer()", () => {
        it("appends layer", () => {
          expect(() => instance.appendLayer()).not.toThrow();
        });
      });

      describe("appendTable()", () => {
        it("appends table", () => {
          expect(() => instance.appendTable()).not.toThrow();
        });
      });
    });
  });
});
