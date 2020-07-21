import mx from "@mxgraph-app/mx";
const { mxResources, mxUtils } = mx;
import { BaseFormatPanel } from "../../../base";
import { StyleFormatPanel } from "../../../style";

export class PanelInit extends BaseFormatPanel {
  panel: any;

  /**
   * Adds the label menu items to the given menu and parent.
   */
  init() {
    const {
      appendLayer,
      appendGeometry,
      appendAngle,
      appendFlip,
      appendTable,
      appendGroup,
      appendStyleFormat,
    } = this;

    appendLayer();
    appendGeometry();
    appendAngle();
    appendFlip();
    appendTable();
    appendGroup();
    appendStyleFormat();
  }

  appendStyleFormat() {
    const { ss } = this;
    if (ss.containsLabel) {
      // Adds functions from hidden style format panel
      var span = document.createElement("div");
      span.style.width = "100%";
      span.style.marginTop = "0px";
      span.style.fontWeight = "bold";
      span.style.padding = "10px 0 0 18px";
      mxUtils.write(span, mxResources.get("style"));
      this.container.appendChild(span);

      new StyleFormatPanel(this.format, this.editorUi, this.container);
    }
  }

  appendGroup() {
    const { addGroupOps } = this.panel;
    this.container.appendChild(addGroupOps(this.createPanel()));
  }

  appendAngle() {
    const { ss } = this;
    const { addAngle } = this.panel;
    if (!ss.containsLabel || ss.edges.length == 0) {
      const angle = addAngle(this.createPanel());
      this.container.appendChild(angle);
    }
  }

  appendGeometry() {
    const { addGeometry, addEdgeGeometry } = this.panel;
    // Special case that adds two panels
    addGeometry();
    addEdgeGeometry();
  }

  appendFlip() {
    const { ss } = this;
    const { addFlip } = this.panel;
    if (
      !ss.containsLabel &&
      ss.edges.length == 0 &&
      ss.style.shape != "rectangle" &&
      ss.style.shape != "label"
    ) {
      const flip = addFlip(this.createPanel());
      this.container.appendChild(flip);
    }
  }

  appendLayer() {
    const { addLayerOps } = this.panel;
    const layer = addLayerOps(this.createPanel());
    this.container.appendChild(layer);
  }

  appendTable() {
    const { graph, ss } = this;
    const { addAlign, addDistribute, addTable } = this.panel;
    if (ss.vertices.length > 1) {
      const align = addAlign(this.createPanel());
      this.container.appendChild(align);

      const distribute = addDistribute(this.createPanel());
      this.container.appendChild(distribute);
    } else if (
      ss.vertices.length == 1 &&
      ss.edges.length == 0 &&
      (graph.isTable(ss.vertices[0]) ||
        graph.isTableRow(ss.vertices[0]) ||
        graph.isTableCell(ss.vertices[0]))
    ) {
      const table = addTable(this.createPanel());
      this.container.appendChild(table);
    }
  }
}
