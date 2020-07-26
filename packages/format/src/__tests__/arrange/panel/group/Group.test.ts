import { Group } from "../../../..";
import { editorUi as ui, format, container } from "../../../mocks";

describe("Group", () => {
  let instance, div;
  beforeEach(() => {
    instance = new Group(ui, format, container);
    div = document.createElement("div");
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(ui);
        });
      });

      // cell;
      // multiSelected;
      // isSingleSelected;
    });

    describe("methods", () => {
      describe("styleDiv()", () => {
        it("style div", () => {
          expect(() => instance.styleDiv()).not.toThrow();
        });
      });

      // onMultiSelect()
      // onSingleSelect()
      // onHasVertices()
      // onSelected()
      // onSingleSelectAndVertex()
      // appendEditDataBtn()
      // appendEditLinkBtn()
      // onOneSelected()
      // add(div)
      // hideDivIfNone()
    });
  });
});
