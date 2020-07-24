import { BaseStyleFormat } from "./BaseStyleFormat";
import mx from "../text/handler/style/node_modules/@mxgraph-app/mx";
const { mxResources, mxUtils } = mx;

export class EditOps extends BaseStyleFormat {
  panel: any;

  constructor(panel, { format, editorUi, container }) {
    super(format, editorUi, container);
    this.panel = panel;
  }
  /**
   * Adds the label menu items to the given menu and parent.
   */
  addEditOps(div) {
    var ss = this.format.getSelectionState();
    var btn: any;

    if (this.editorUi.editor.graph.getSelectionCount() == 1) {
      btn = mxUtils.button(mxResources.get("editStyle"), (_evt) => {
        this.editorUi.actions.get("editStyle").funct();
      });

      btn.setAttribute(
        "title",
        mxResources.get("editStyle") +
          " (" +
          this.editorUi.actions.get("editStyle").shortcut +
          ")"
      );
      btn.style.width = "202px";
      btn.style.marginBottom = "2px";

      div.appendChild(btn);
    }

    if (ss.image) {
      var btn2 = mxUtils.button(mxResources.get("editImage"), (_evt) => {
        this.editorUi.actions.get("image").funct();
      });

      btn2.setAttribute("title", mxResources.get("editImage"));
      btn2.style.marginBottom = "2px";

      if (btn == null) {
        btn2.style.width = "202px";
      } else {
        btn.style.width = "100px";
        btn2.style.width = "100px";
        btn2.style.marginLeft = "2px";
      }

      div.appendChild(btn2);
    }

    return div;
  }
}
