import { ContainerPanel } from "../../../text";
import { editorUi as ui, format, container, editorUi } from "../../mocks";

describe("ContainerPanel", () => {
  let instance, div;
  beforeEach(() => {
    instance = new ContainerPanel(format, editorUi, container);
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
      describe("createToolbarFormatButtons()", () => {
        it("creates instance", () => {
          expect(instance.createToolbarFormatButtons()).toBeDefined();
        });
      });
    });
    //

    // REFACTOR
    // append()

    // addBtns()
    // addBtns1()
    // addBtns2()
    // addBtns3()
  });
});
