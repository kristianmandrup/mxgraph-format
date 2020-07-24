import { GraphUpdater } from "../..";
import { DiagramFormatPanel } from "../../diagram";
import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("GraphUpdater", () => {
  let instance;
  const formatPanel = new DiagramFormatPanel(format, ui, container);
  const evt = {};
  beforeEach(() => {
    instance = new GraphUpdater(formatPanel, evt);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("formatPanel", () => {
        it("is set", () => {
          expect(instance.formatPanel).toBe(formatPanel);
        });
      });

      describe("evt", () => {
        it("is set", () => {
          expect(instance.evt).toBe(evt);
        });
      });

      describe("value", () => {
        it("is set", () => {
          expect(instance.value).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("setGridSize()", () => {
        it("sets gridSize", () => {
          expect(instance.setGridSize()).toBeDefined();
        });
      });

      describe("setInputValue()", () => {
        it("sets input value", () => {
          expect(instance.setInputValue()).toBeDefined();
        });
      });

      describe("update()", () => {
        it("updates", () => {
          expect(instance.update()).toBeDefined();
        });
      });
    });
  });
});
