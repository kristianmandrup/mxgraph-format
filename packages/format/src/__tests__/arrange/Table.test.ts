import { Table } from "../../";
import { editorUi as ui, format, container } from "../mocks";

describe("Table", () => {
  let instance;
  beforeEach(() => {
    instance = new Table(ui, format);
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
      describe("styleDiv()", () => {
        it("style div", () => {
          expect(() => instance.styleDiv()).not.toThrow();
        });
      });

      describe("appendSpan()", () => {
        it("appends span", () => {
          expect(() => instance.appendSpan()).not.toThrow();
        });
      });

      describe("createPanel()", () => {
        it("create panel", () => {
          expect(() => instance.createPanel()).not.toThrow();
        });
      });

      describe("addButtons()", () => {
        it("add buttons", () => {
          expect(() => instance.addButtons()).not.toThrow();
        });
      });

      describe("spaceButtons()", () => {
        it("style and space buttons", () => {
          instance.addButtons();
          expect(() => instance.spaceButtons()).not.toThrow();
        });
      });

      describe("add(div)", () => {
        it("adds to div - no throw", () => {
          expect(() => instance.add(container)).not.toThrow();
        });
      });
    });
  });
});
