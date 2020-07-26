import { Angle } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Angle", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Angle(ui, format, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      describe("hasVerticesAndEdges", () => {
        it("is false", () => {
          expect(instance.hasVerticesAndEdges).toBeFalsy();
        });
      });
    });

    describe("methods", () => {
      describe("add(div)", () => {
        it("adds", () => {
          expect(() => instance.add(div)).not.toThrow();
        });
      });

      describe("configureInput()", () => {
        it("configures input", () => {
          expect(() => instance.configureInput()).not.toThrow();
        });
      });

      describe("createSpan()", () => {
        it("creates span", () => {
          expect(() => instance.createSpan()).not.toThrow();
        });
      });

      describe("setDiv()", () => {
        it("styles div", () => {
          expect(() => instance.setDiv()).not.toThrow();
        });
      });

      describe("createInput()", () => {
        it("creates input", () => {
          expect(() => instance.createInput()).not.toThrow();
        });
      });

      describe("withoutEdges()", () => {
        it("no throw", () => {
          expect(() => instance.withoutEdges()).not.toThrow();
        });
      });

      describe("withEdges()", () => {
        it("no throw", () => {
          expect(() => instance.withEdges()).not.toThrow();
        });
      });

      describe("addListener()", () => {
        it("adds listener", () => {
          expect(() => instance.addListener()).not.toThrow();
        });
      });

      describe("createUpdate()", () => {
        it("create input update handler", () => {
          expect(() => instance.createUpdate()).not.toThrow();
        });
      });

      describe("createListener()", () => {
        it("creates listener", () => {
          expect(() => instance.createListener()).not.toThrow();
        });
      });

      describe("configureLabelsAndButtons()", () => {
        it("configures labels and buttons", () => {
          expect(() => instance.configureLabelsAndButtons()).not.toThrow();
        });
      });

      describe("createLabel()", () => {
        it("creates label", () => {
          expect(() => instance.createLabel()).not.toThrow();
        });
      });

      describe("getLabel()", () => {
        it("get label", () => {
          expect(() => instance.getLabel()).not.toThrow();
        });
      });

      describe("createBtn()", () => {
        it("creates btn", () => {
          expect(() => instance.createBtn()).not.toThrow();
        });
      });
    });
  });
});
