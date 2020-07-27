import { BasicManagerListener } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe(" BasicManagerListener", () => {
  let instance;
  beforeEach(() => {
    instance = new BasicManagerListener(ui, format, container);
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
      // REFACTOR
      describe("listener(sender?, evt?, force?)", () => {
        it("reacts", () => {
          expect(() => instance.listener()).not.toThrow();
        });
      });
    });
  });
});
