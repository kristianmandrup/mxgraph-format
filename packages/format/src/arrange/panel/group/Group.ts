import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../../../base";
const { mxResources, mxUtils } = mx;

export class Group extends BaseFormatPanel {
  div: any;
  count: number = 0;

  styleDiv() {
    const { div } = this;
    div.style.paddingTop = "8px";
    div.style.paddingBottom = "6px";
    return div;
  }

  get cell() {
    return this.graph.getSelectionCell();
  }

  get multiSelected() {
    return this.graph.getSelectionCount() > 1;
  }

  onMultiSelect() {
    const { multiSelected, div, actions, resource } = this;
    if (!multiSelected) return;

    const btn = mxUtils.button(resource("group"), (_evt) => {
      actions.get("group").funct();
    });

    btn.setAttribute(
      "title",
      resource("group") + " (" + actions.get("group").shortcut + ")"
    );
    btn.style.width = "202px";
    btn.style.marginBottom = "2px";
    div.appendChild(btn);
    this.count++;
    return true;
  }

  get isSingleSelected() {
    const { graph, cell } = this;
    return (
      graph.getSelectionCount() == 1 &&
      !graph.getModel().isEdge(cell) &&
      !graph.isSwimlane(cell) &&
      graph.getModel().getChildCount(cell) > 0
    );
  }

  onSingleSelect() {
    const { isSingleSelected, div, actions } = this;
    if (isSingleSelected) {
      const btn = mxUtils.button(mxResources.get("ungroup"), (_evt) => {
        actions.get("ungroup").funct();
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
      this.count++;
    }
  }

  onHasVertices() {
    const { ui, count, hasVertices, actions, resource, div } = this;
    if (!hasVertices) return;
    if (count > 0) {
      mxUtils.br(div);
      this.count = 0;
    }

    var btn = mxUtils.button(resource("copySize"), (_evt) => {
      actions.get("copySize").funct();
    });

    btn.setAttribute(
      "title",
      resource("copySize") + " (" + actions.get("copySize").shortcut + ")"
    );
    btn.style.width = "202px";
    btn.style.marginBottom = "2px";

    div.appendChild(btn);
    this.count++;

    if (ui.copiedSize != null) {
      var btn2 = mxUtils.button(resource("pasteSize"), function (_evt) {
        actions.get("pasteSize").funct();
      });

      btn2.setAttribute(
        "title",
        mxResources.get("pasteSize") +
          " (" +
          this.editorUi.actions.get("pasteSize").shortcut +
          ")"
      );

      div.appendChild(btn2);
      this.count++;

      btn.style.width = "100px";
      btn.style.marginBottom = "2px";
      btn2.style.width = "100px";
      btn2.style.marginBottom = "2px";
    }
    return true;
  }

  onSelected() {
    const { graph, div } = this;
    if (graph.getSelectionCount() > 0) {
      const { count } = this;
      if (count > 0) {
        mxUtils.br(div);
      }

      const btn = mxUtils.button(mxResources.get("clearWaypoints"), (_evt) => {
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

      this.count++;
    }
    return true;
  }

  onSingleSelectAndVertex() {
    const { graph, cell, actions, div } = this;
    if (
      graph.getSelectionCount() == 1 &&
      graph.getModel().isVertex(cell) &&
      graph.getModel().isVertex(graph.getModel().getParent(cell))
    ) {
      const { count } = this;
      if (count > 0) {
        mxUtils.br(div);
      }

      const btn = mxUtils.button(mxResources.get("removeFromGroup"), (_evt) => {
        actions.get("removeFromGroup").funct();
      });

      btn.setAttribute("title", mxResources.get("removeFromGroup"));
      btn.style.width = "202px";
      btn.style.marginBottom = "2px";
      div.appendChild(btn);
      this.count++;
    }
    return true;
  }

  appendEditDataBtn() {
    const { div } = this;
    const btn = mxUtils.button(mxResources.get("editData"), (_evt) => {
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
    this.count++;
  }

  appendEditLinkBtn() {
    const { div } = this;
    const btn = mxUtils.button(mxResources.get("editLink"), (_evt) => {
      this.editorUi.actions.get("editLink").funct();
    });

    btn.setAttribute("title", mxResources.get("editLink"));
    btn.style.width = "100px";
    btn.style.marginLeft = "2px";
    btn.style.marginBottom = "2px";
    div.appendChild(btn);
    this.count++;
  }

  onOneSelected() {
    const { graph, div, appendEditDataBtn, appendEditLinkBtn } = this;
    if (graph.getSelectionCount() == 1) {
      const { count } = this;
      if (count > 0) {
        mxUtils.br(div);
      }
      appendEditDataBtn();
      appendEditLinkBtn();
    }
  }

  /**
   *
   */
  add(div) {
    const {
      styleDiv,
      onMultiSelect,
      onSingleSelect,
      onHasVertices,
      onSingleSelectAndVertex,
      onSelected,
      onOneSelected,
      hideDivIfNone,
    } = this;
    this.div = div;
    styleDiv();
    onMultiSelect() || onSingleSelect();
    onHasVertices();
    onSingleSelectAndVertex() || onSelected();
    onOneSelected();
    hideDivIfNone();
    return div;
  }

  hideDivIfNone() {
    const { div, count } = this;
    if (count == 0) {
      div.style.display = "none";
    }
  }
}
