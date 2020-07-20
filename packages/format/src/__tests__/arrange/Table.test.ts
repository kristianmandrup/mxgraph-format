import { Table } from "../../";
import { editorUi as ui, format, container } from "../mocks";

describe("Table", () => {
  let instance;
  beforeEach(() => {
    instance = new Table(ui, format);
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
      describe("add(div)", () => {
        it("adds to div - no throw", () => {
          expect(() => instance.add(container)).not.toThrow();
        });
      });
    });
  });
});
