import mx from "@mxgraph-app/mx";
import { BaseArrangeFormat } from "../../BaseArrangeFormat";
const { mxResources, mxUtils } = mx;

export class Group extends BaseArrangeFormat {
  /**
   *
   */
  add(div) {
    var ui = this.editorUi;
    var graph = ui.editor.graph;
    var cell = graph.getSelectionCell();
    var ss = this.format.getSelectionState();
    var count = 0;
    var btn: any = null;

    div.style.paddingTop = "8px";
    div.style.paddingBottom = "6px";

    if (graph.getSelectionCount() > 1) {
      btn = mxUtils.button(mxResources.get("group"), (_evt) => {
        ui.actions.get("group").funct();
      });

      btn.setAttribute(
        "title",
        mxResources.get("group") +
          " (" +
          this.editorUi.actions.get("group").shortcut +
          ")"
      );
      btn.style.width = "202px";
      btn.style.marginBottom = "2px";
      div.appendChild(btn);
      count++;
    } else if (
      graph.getSelectionCount() == 1 &&
      !graph.getModel().isEdge(cell) &&
      !graph.isSwimlane(cell) &&
      graph.getModel().getChildCount(cell) > 0
    ) {
      btn = mxUtils.button(mxResources.get("ungroup"), (_evt) => {
        ui.actions.get("ungroup").funct();
      });

      btn.setAttribute(
        "title",
        mxResources.get("ungroup") +
          " (" +
          this.editorUi.actions.get("ungroup").shortcut +
          ")"
      );
      btn.style.width = "202px";
      btn.style.marginBottom = "2px";
      div.appendChild(btn);
      count++;
    }

    if (ss.vertices.length > 0) {
      if (count > 0) {
        mxUtils.br(div);
        count = 0;
      }

      var btn = mxUtils.button(mxResources.get("copySize"), (_evt) => {
        ui.actions.get("copySize").funct();
      });

      btn.setAttribute(
        "title",
        mxResources.get("copySize") +
          " (" +
          this.editorUi.actions.get("copySize").shortcut +
          ")"
      );
      btn.style.width = "202px";
      btn.style.marginBottom = "2px";

      div.appendChild(btn);
      count++;

      if (ui.copiedSize != null) {
        var btn2 = mxUtils.button(mxResources.get("pasteSize"), function (
          _evt
        ) {
          ui.actions.get("pasteSize").funct();
        });

        btn2.setAttribute(
          "title",
          mxResources.get("pasteSize") +
            " (" +
            this.editorUi.actions.get("pasteSize").shortcut +
            ")"
        );

        div.appendChild(btn2);
        count++;

        btn.style.width = "100px";
        btn.style.marginBottom = "2px";
        btn2.style.width = "100px";
        btn2.style.marginBottom = "2px";
      }
    }

    if (
      graph.getSelectionCount() == 1 &&
      graph.getModel().isVertex(cell) &&
      graph.getModel().isVertex(graph.getModel().getParent(cell))
    ) {
      if (count > 0) {
        mxUtils.br(div);
      }

      btn = mxUtils.button(mxResources.get("removeFromGroup"), (_evt) => {
        ui.actions.get("removeFromGroup").funct();
      });

      btn.setAttribute("title", mxResources.get("removeFromGroup"));
      btn.style.width = "202px";
      btn.style.marginBottom = "2px";
      div.appendChild(btn);
      count++;
    } else if (graph.getSelectionCount() > 0) {
      if (count > 0) {
        mxUtils.br(div);
      }

      btn = mxUtils.button(mxResources.get("clearWaypoints"), (_evt) => {
        this.editorUi.actions.get("clearWaypoints").funct();
      });

      btn.setAttribute(
        "title",
        mxResources.get("clearWaypoints") +
          " (" +
          this.editorUi.actions.get("clearWaypoints").shortcut +
          ")"
      );
      btn.style.width = "202px";
      btn.style.marginBottom = "2px";
      div.appendChild(btn);

      count++;
    }

    if (graph.getSelectionCount() == 1) {
      if (count > 0) {
        mxUtils.br(div);
      }

      btn = mxUtils.button(mxResources.get("editData"), (_evt) => {
        this.editorUi.actions.get("editData").funct();
      });

      btn.setAttribute(
        "title",
        mxResources.get("editData") +
          " (" +
          this.editorUi.actions.get("editData").shortcut +
          ")"
      );
      btn.style.width = "100px";
      btn.style.marginBottom = "2px";
      div.appendChild(btn);
      count++;

      btn = mxUtils.button(mxResources.get("editLink"), (_evt) => {
        this.editorUi.actions.get("editLink").funct();
      });

      btn.setAttribute("title", mxResources.get("editLink"));
      btn.style.width = "100px";
      btn.style.marginLeft = "2px";
      btn.style.marginBottom = "2px";
      div.appendChild(btn);
      count++;
    }

    if (count == 0) {
      div.style.display = "none";
    }

    return div;
  }
}
