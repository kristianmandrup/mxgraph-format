import { BaseStyleFormat } from "./BaseStyleFormat";
import mx from "@mxgraph-app/mx";
const { mxEvent, mxConstants, mxResources, mxClient } = mx;

export class Effects extends BaseStyleFormat {
  /**
   * Adds the label menu items to the given menu and parent.
   */
  addEffects(div) {
    var ui = this.editorUi;
    var editor = ui.editor;
    var graph = editor.graph;
    var ss = this.format.getSelectionState();

    div.style.paddingTop = "0px";
    div.style.paddingBottom = "2px";

    var table = document.createElement("table");

    if (mxClient.IS_QUIRKS) {
      table.style.fontSize = "1em";
    }

    table.style.width = "100%";
    table.style.fontWeight = "bold";
    table.style.paddingRight = "20px";
    var tbody = document.createElement("tbody");
    var row = document.createElement("tr");
    row.style.padding = "0px";
    var left = document.createElement("td");
    left.style.padding = "0px";
    left.style.width = "50%";
    left.setAttribute("valign", "top");

    var right: any = left.cloneNode(true);
    right.style.paddingLeft = "8px";
    row.appendChild(left);
    row.appendChild(right);
    tbody.appendChild(row);
    table.appendChild(tbody);
    div.appendChild(table);

    var current = left;
    var count = 0;

    var addOption = (label, key, defaultValue) => {
      var opt = this.createCellOption(label, key, defaultValue);
      opt.style.width = "100%";
      current.appendChild(opt);
      current = current == left ? right : left;
      count++;
    };

    var listener = (_sender?, _evt?, _force?) => {
      ss = this.format.getSelectionState();

      left.innerHTML = "";
      right.innerHTML = "";
      current = left;

      if (ss.rounded) {
        addOption(mxResources.get("rounded"), mxConstants.STYLE_ROUNDED, 0);
      }

      if (ss.style.shape == "swimlane") {
        addOption(mxResources.get("divider"), "swimlaneLine", 1);
      }

      if (!ss.containsImage) {
        addOption(mxResources.get("shadow"), mxConstants.STYLE_SHADOW, 0);
      }

      if (ss.glass) {
        addOption(mxResources.get("glass"), mxConstants.STYLE_GLASS, 0);
      }

      if (ss.comic) {
        addOption(mxResources.get("comic"), "comic", 0);
      }

      if (count == 0) {
        div.style.display = "none";
      }
    };

    graph.getModel().addListener(mxEvent.CHANGE, listener);
    this.listeners.push({
      destroy: () => {
        graph.getModel().removeListener(listener);
      },
    });

    listener();

    return div;
  }
}
