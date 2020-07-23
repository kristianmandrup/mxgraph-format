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

      // REFACTOR
      describe("append()", () => {
        it("appends", () => {
          expect(instance.append()).toBeDefined();
        });
      });

      describe("addBtns()", () => {
        it("adds", () => {
          expect(instance.addBtns()).toBeDefined();
        });
      });

      describe("addBtns1()", () => {
        it("adds", () => {
          expect(instance.addBtns1()).toBeDefined();
        });
      });

      describe("addBtns2()", () => {
        it("adds", () => {
          expect(instance.addBtns2()).toBeDefined();
        });
      });

      describe("addBtns3()", () => {
        it("adds", () => {
          expect(instance.addBtns3()).toBeDefined();
        });
      });
    });
  });
});
