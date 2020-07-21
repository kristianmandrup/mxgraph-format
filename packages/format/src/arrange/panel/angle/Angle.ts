import mx from "@mxgraph-app/mx";
import { BaseFormatPanel } from "../../../base";
const { mxUtils, mxEvent, mxConstants } = mx;

export class Angle extends BaseFormatPanel {
  div: any;
  span: any;
  input: any;
  update: any;
  label: any;
  btn: any;
  listener: any;

  createSpan() {
    var span = document.createElement("div");
    span.style.position = "absolute";
    span.style.width = "70px";
    span.style.marginTop = "0px";
    span.style.fontWeight = "bold";
    this.span = span;
    return span;
  }

  setDiv() {
    const { div, ss } = this;

    div.style.paddingBottom = "8px";
    if (ss.edges.length == 0) {
    } else {
      div.style.paddingTop = "8px";
    }
  }

  createInput() {
    const { div, addUnitInput, update } = this;
    this.input = addUnitInput(
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
  }

  withoutEdges() {
    const { createInput, resource, hasEdges, div, span } = this;
    if (hasEdges) return;
    createInput();
    mxUtils.write(span, resource("angle"));
    div.appendChild(span);
    mxUtils.br(div);
    div.style.paddingTop = "10px";
  }

  withEdges() {
    const { hasEdges } = this;
    if (!hasEdges) return;
    this.div.style.paddingTop = "8px";
  }

  createBtn() {
    const { label, ui, div, input, actions } = this;
    const btn = mxUtils.button(label, (evt) => {
      ui.actions.get("turn").funct(evt);
    });

    btn.setAttribute(
      "title",
      label + " (" + actions.get("turn").shortcut + ")"
    );
    btn.style.width = "202px";
    div.appendChild(btn);

    if (input) {
      btn.style.marginTop = "8px";
    }
    this.btn = btn;
    return btn;
  }

  get hasVerticesAndEdges() {
    return this.hasVertices && this.hasEdges;
  }

  getLabel() {
    const { resource, hasVertices, hasVerticesAndEdges } = this;
    let label = resource("reverse");
    if (hasVerticesAndEdges) {
      return resource("turn") + " / " + label;
    } else if (hasVertices) {
      return resource("turn");
    }
    return label;
  }

  createLabel() {
    const { ss } = this;
    if (ss.containsLabel) return;
    this.label = this.getLabel();
  }

  configureLabelsAndButtons() {
    this.createLabel();
    this.createBtn();
  }

  createListener() {
    const { input, ss } = this;
    this.listener = (_sender?, _evt?, force?) => {
      if (force || document.activeElement != input) {
        var tmp = parseFloat(
          mxUtils.getValue(ss.style, mxConstants.STYLE_ROTATION, 0)
        );
        input.value = isNaN(tmp) ? "" : tmp + "°";
      }
    };
  }

  createUpdate() {
    const { input } = this;
    this.update = this.installInputHandler(
      input,
      mxConstants.STYLE_ROTATION,
      0,
      0,
      360,
      "°",
      null,
      true
    );
  }

  addListener() {
    const { addKeyHandler, listeners, graph, listener, input } = this;
    addKeyHandler(input, listener);
    graph.getModel().addListener(mxEvent.CHANGE, listener);
    listeners.push({
      destroy: function () {
        graph.getModel().removeListener(listener);
      },
    });
  }

  configureInput() {
    const { listener, addListener, createUpdate, createListener, input } = this;
    if (!input) return;
    createListener();
    createUpdate();
    addListener();
    listener();
  }

  /**
   *
   */
  add(div) {
    this.div = div;
    const {
      configureInput,
      createSpan,
      setDiv,
      configureLabelsAndButtons,
    } = this;
    createSpan();
    setDiv();
    configureLabelsAndButtons();
    configureInput();
    return div;
  }
}
