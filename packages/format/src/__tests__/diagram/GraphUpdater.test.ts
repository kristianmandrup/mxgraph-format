import { GraphUpdater } from "../..";
// import { editorUi as ui, format, container, editorUi } from "../mocks";

describe("GraphUpdater", () => {
  let instance, div;
  const formatPanel = {};
  const evt = {};
  beforeEach(() => {
    instance = new GraphUpdater(formatPanel, evt);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("evt", () => {
        it("is set", () => {
          expect(instance.evt).toBe(evt);
        });
      });
    });
  });
});
