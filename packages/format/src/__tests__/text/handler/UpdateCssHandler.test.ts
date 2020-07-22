import { UpdateCssHandler } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("UpdateCssHandler", () => {
  let instance, div;
  beforeEach(() => {
    instance = new UpdateCssHandler(format, editorUi, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      // setSelected: any;
      // fontStyleItems: any;
      // sup: any;
      // sub: any;

      // full: any;
      // left: any;
      // center: any;
      // right: any;

      // currentTable: any;
      // tableRow: any;
      // tableCell: any;
      // tableWrapper: any;
      // pendingFontSize: any;
      // input: any;
      // lineHeightInput: any;
      // fontMenu: any;
      // currentFontColor: any;
      // fontColorApply: any;
      // currentBgColor: any;
      // bgColorApply: any;
    });

    describe("methods", () => {
      describe("create()", () => {
        it("creates update css handler", () => {
          expect(instance.create()).toBeDefined();
        });
      });
    });
  });
});
