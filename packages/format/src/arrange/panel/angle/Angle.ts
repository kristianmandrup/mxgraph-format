import mx from "@mxgraph-app/mx";
import { BaseArrangeFormat } from "../../BaseArrangeFormat";
const { mxUtils, mxEvent, mxConstants, mxResources } = mx;

export class Angle extends BaseArrangeFormat {
  /**
   *
   */
  add(div) {
    var ui = this.editorUi;
    var editor = ui.editor;
    var graph = editor.graph;
    var ss = this.format.getSelectionState();

    div.style.paddingBottom = "8px";

    var span = document.createElement("div");
    span.style.position = "absolute";
    span.style.width = "70px";
    span.style.marginTop = "0px";
    span.style.fontWeight = "bold";

    var input: any;
    var update: any;
    var btn: any;

    if (ss.edges.length == 0) {
      mxUtils.write(span, mxResources.get("angle"));
      div.appendChild(span);

      input = this.addUnitInput(
        div,
        "°",
        20,
        44,
        () => {
          update.apply(this, arguments);
        },
        null,
        null,
        null,
        null
      );

      mxUtils.br(div);
      div.style.paddingTop = "10px";
    } else {
      div.style.paddingTop = "8px";
    }

    if (!ss.containsLabel) {
      var label = mxResources.get("reverse");

      if (ss.vertices.length > 0 && ss.edges.length > 0) {
        label = mxResources.get("turn") + " / " + label;
      } else if (ss.vertices.length > 0) {
        label = mxResources.get("turn");
      }

      btn = mxUtils.button(label, (evt) => {
        ui.actions.get("turn").funct(evt);
      });

      btn.setAttribute(
        "title",
        label + " (" + this.editorUi.actions.get("turn").shortcut + ")"
      );
      btn.style.width = "202px";
      div.appendChild(btn);

      if (input) {
        btn.style.marginTop = "8px";
      }
    }

    if (input) {
      var listener = (_sender?, _evt?, force?) => {
        if (force || document.activeElement != input) {
          ss = this.format.getSelectionState();
          var tmp = parseFloat(
            mxUtils.getValue(ss.style, mxConstants.STYLE_ROTATION, 0)
          );
          input.value = isNaN(tmp) ? "" : tmp + "°";
        }
      };

      update = this.installInputHandler(
        input,
        mxConstants.STYLE_ROTATION,
        0,
        0,
        360,
        "°",
        null,
        true
      );
      this.addKeyHandler(input, listener);

      graph.getModel().addListener(mxEvent.CHANGE, listener);
      this.listeners.push({
        destroy: function () {
          graph.getModel().removeListener(listener);
        },
      });
      listener();
    }

    return div;
  }
}
