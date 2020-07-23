import { TextFormatListener } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("TextFormatListener", () => {
  let instance, div;
  beforeEach(() => {
    instance = new TextFormatListener();
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("ss", () => {
        it("is set", () => {
          expect(instance.ss).toBeDefined();
        });
      });

      describe("format", () => {
        it("is set", () => {
          expect(instance.format).toBeDefined();
        });
      });

      describe("fontStyleItems", () => {
        it("is set", () => {
          expect(instance.fontStyleItems).toBeDefined();
        });
      });

      describe("fontMenu", () => {
        it("is set", () => {
          expect(instance.fontMenu).toBeDefined();
        });
      });

      describe("defaultFont", () => {
        it("is set", () => {
          expect(instance.defaultFont).toBeDefined();
        });
      });

      describe("defaultFontSize", () => {
        it("is set", () => {
          expect(instance.defaultFontSize).toBeDefined();
        });
      });

      describe("verticalItem", () => {
        it("is set", () => {
          expect(instance.verticalItem).toBeDefined();
        });
      });

      describe("input", () => {
        it("is set", () => {
          expect(instance.input).toBeDefined();
        });
      });

      // dirSelect: any;
      // globalSpacing: any;
      // topSpacing: any;
      // bottomSpacing: any;
      // leftSpacing: any;
      // rightSpacing: any;

      // left: any;
      // center: any;
      // right: any;

      // top: any;
      // middle: any;
      // bottom: any;

      // positionSelect: any;
    });

    describe("methods", () => {
      describe("listener()", () => {
        it("acts on event from sender", () => {
          const sender = {},
            evt = {},
            force = false;
          expect(instance.listener(sender, evt, force)).toBe(ui);
        });
      });

      describe("setStyle()", () => {
        it("sets style", () => {
          const force = false;
          expect(() => instance.setStyle(force)).not.toThrow();
        });
      });

      describe("setFontStyle()", () => {
        it("sets font style", () => {
          expect(() => instance.setFontStyle()).not.toThrow();
        });
      });

      describe("setAlignPos()", () => {
        it("sets alignment", () => {
          expect(() => instance.setAlignPos()).not.toThrow();
        });
      });

      describe("setSpacing(force)", () => {
        it("sets spacing", () => {
          const force = false;
          expect(() => instance.setSpacing(force)).not.toThrow();
        });
      });
    });
  });
});
