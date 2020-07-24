import { DiagramFormatPanel } from "../..";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("DiagramFormatPanel", () => {
  let instance;
  beforeEach(() => {
    instance = new DiagramFormatPanel(format, editorUi, container);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("gridEnabledListener", () => {
        it("is set", () => {
          expect(instance.gridEnabledListener).toBe(ui);
        });
      });
    });

    describe("methods", () => {
      describe("addOptions(div)", () => {
        it("adds options to div", () => {
          const div = document.createElement("div");
          expect(instance.addOptions(div)).toBeDefined();
        });
      });

      describe("addGridOption(container)", () => {
        it("adds grid option to container", () => {
          const container = document.createElement("div");
          expect(instance.addGridOption(container)).toBeDefined();
        });
      });

      describe("update(evt)", () => {
        it("update from event data", () => {
          const evt = {};
          expect(() => instance.update(evt)).not.toThrow();
        });
      });

      describe("addDocumentProperties(div)", () => {
        it("adds document properties to div", () => {
          const div = document.createElement("div");
          expect(() => instance.addDocumentProperties(div)).not.toThrow();
        });
      });

      describe("addPaperSize(div)", () => {
        it("adds papersize to div", () => {
          const div = document.createElement("div");
          expect(() => instance.addPaperSize(div)).not.toThrow();
        });
      });

      describe("addStyleOps(div)", () => {
        it("adds style options to div", () => {
          const div = document.createElement("div");
          expect(() => instance.addStyleOps(div)).not.toThrow();
        });
      });

      describe("destroy()", () => {
        it("detroys", () => {
          const div = document.createElement("div");
          expect(() => instance.destroy()).not.toThrow();
        });
      });
    });
  });
});
