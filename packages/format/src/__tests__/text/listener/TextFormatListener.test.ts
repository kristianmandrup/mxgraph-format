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

      // ss
      // format: any;
      // setSelected: any;
      // fontStyleItems: any;
      // fontMenu: any;
      // defaultFont: any;
      // defaultFontSize: any;
      // verticalItem: any;
      // input: any;

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
    });
  });
});
