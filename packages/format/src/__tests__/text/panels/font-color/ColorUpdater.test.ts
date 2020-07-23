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
      describe("update()", () => {
        it("updates", () => {
          expect(instance.update()).toBeDefined();
        });
      });
    });
  });
});
