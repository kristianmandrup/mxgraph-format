import { Table } from "../../";
import { editorUi as ui, format } from "../mocks";

describe("Table", () => {
  let instance;
  beforeEach(() => {
    instance = new Table(ui);
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
          expect(() => instance.add(div)).not.toThrow();
        });
      });
    });
  });
});
