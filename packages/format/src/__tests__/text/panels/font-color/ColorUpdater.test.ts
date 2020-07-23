import { ColorUpdater } from "../../../../";
// import { editorUi as ui, format, container, editorUi } from "../../../mocks";

describe("FontColorPanel", () => {
  let instance;
  beforeEach(() => {
    instance = new ColorUpdater();
  });

  describe("instance", () => {
    describe("properties", () => {});

    describe("methods", () => {
      describe("update(color)", () => {
        it("updates", () => {
          const color = "black";
          expect(() => instance.update(color)).not.toThrow();
        });
      });

      describe("onNormal()", () => {
        it("executes command", () => {
          expect(() => instance.onNormal()).not.toThrow();
        });
      });

      describe("executeCommand()", () => {
        it("executes command", () => {
          expect(() => instance.executeCommand()).not.toThrow();
        });
      });

      describe("isDifferent(newFont, oldFont)", () => {
        it("is true", () => {
          const newFont = {},
            oldFont = {};
          expect(instance.isDifferent(newFont, oldFont)).toBeTruthy();
        });
      });

      describe("cloneFontElements()", () => {
        it("clones font elements", () => {
          expect(instance.cloneFontElements()).toBeDefined();
        });
      });

      describe("onFireFox()", () => {
        it("no throw", () => {
          expect(() => instance.onFireFox()).not.toThrow();
        });
      });

      describe("isAnchor(child)", () => {
        it("is false", () => {
          const child = document.createElement("a");
          expect(instance.isAnchor(child)).toBeFalsy();
        });
      });

      describe("processFont(newFont)", () => {
        it("processes font", () => {
          const newFont = {};
          expect(() => instance.processFont(newFont)).not.toThrow();
        });
      });

      describe("appendFontElem(child, newFont)", () => {
        it("appends font element to child", () => {
          const child = document.createElement("a");
          const newFont = {};
          expect(() => instance.appendFontElem(child, newFont)).not.toThrow();
        });
      });
    });
  });
});
