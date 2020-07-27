import { Base } from "../Base";
import mx from "@mxgraph-app/mx";
const { mxClient, mxConstants, mxEvent, mxUtils } = mx;

export class ColorOption extends Base {
  label: any;
  div: any;
  span: any;
  btn: any;
  checkbox: any;
  hideCheckbox: boolean = false;
  applying: boolean = false;
  getColorFn: any;
  callbackFn: any;
  setColorFn: any;

  value: any;
  defaultColor: any;

  createDiv() {
    const div = document.createElement("div");
    div.style.padding = "6px 0px 1px 0px";
    div.style.whiteSpace = "nowrap";
    div.style.overflow = "hidden";
    div.style.width = "200px";
    div.style.height = mxClient.IS_QUIRKS ? "27px" : "18px";
    this.div = div;
    return div;
  }

  createCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.style.margin = "0px 6px 0px 0px";
    this.checkbox = checkbox;
    return checkbox;
  }

  appendCheckbox() {
    const { createCheckbox } = this;
    createCheckbox();
    const { div, checkbox, hideCheckbox } = this;
    if (!hideCheckbox) {
      div.appendChild(checkbox);
    }
  }

  appendSpan() {
    const { div, label } = this;
    var span = document.createElement("span");
    mxUtils.write(span, label);
    div.appendChild(span);
    this.span = span;
    return span;
  }

  appendBtn() {
    const { getColorFn, apply, checkbox, hideCheckbox, div } = this;
    var value = getColorFn();
    this.value = value;

    var btn: any;
    btn = mxUtils.button("", (evt) => {
      this.editorUi.pickColor(value, function (color) {
        apply(color, null, true);
      });
      mxEvent.consume(evt);
    });
    btn.style.position = "absolute";
    btn.style.marginTop = "-4px";
    btn.style.right = mxClient.IS_QUIRKS ? "0px" : "20px";
    btn.style.height = "22px";
    btn.className = "geColorBtn";
    btn.style.display = checkbox.checked || hideCheckbox ? "" : "none";
    this.btn = btn;
    div.appendChild(btn);
  }

  createColorOption(
    label,
    getColorFn,
    setColorFn,
    defaultColor,
    listener,
    callbackFn?,
    hideCheckbox?
  ) {
    this.label = label;
    this.hideCheckbox = hideCheckbox;
    this.getColorFn = getColorFn;
    this.defaultColor = defaultColor;
    this.callbackFn = callbackFn;
    this.setColorFn = setColorFn;

    const { createDiv, appendCheckbox, appendSpan, appendBtn, apply } = this;
    createDiv();
    appendCheckbox();
    appendSpan();
    appendBtn();

    const { div, checkbox, value } = this;
    mxEvent.addListener(div, "click", (evt) => {
      var source = mxEvent.getSource(evt);

      if (source == checkbox || source.nodeName != "INPUT") {
        // Toggles checkbox state for click on label
        if (source != checkbox) {
          checkbox.checked = !checkbox.checked;
        }

        const { value } = this;
        // Overrides default value with current value to make it easier
        // to restore previous value if the checkbox is clicked twice
        if (
          !checkbox.checked &&
          value != null &&
          value != mxConstants.NONE &&
          defaultColor != mxConstants.NONE
        ) {
          defaultColor = value;
        }

        apply(checkbox.checked ? defaultColor : mxConstants.NONE);
      }
    });

    apply(value, true);

    if (listener) {
      listener.install(apply);
      this.listeners.push(listener);
    }

    return div;
  }

  apply = (color, disableUpdate?, forceUpdate?) => {
    const { applying, defaultColor, btn, checkbox } = this;
    if (!applying) {
      this.applying = true;
      color = /(^#?[a-zA-Z0-9]*$)/.test(color) ? color : defaultColor;
      btn.innerHTML =
        '<div style="width:' +
        (mxClient.IS_QUIRKS ? "30" : "36") +
        "px;height:12px;margin:3px;border:1px solid black;background-color:" +
        mxUtils.htmlEntities(
          color != null && color != mxConstants.NONE ? color : defaultColor
        ) +
        ';"></div>';

      // Fine-tuning in Firefox, quirks mode and IE8 standards
      if (mxClient.IS_QUIRKS || this.documentMode == 8) {
        btn.firstChild.style.margin = "0px";
      }

      if (color != null && color != mxConstants.NONE) {
        checkbox.setAttribute("checked", "checked");
        checkbox.defaultChecked = true;
        checkbox.checked = true;
      } else {
        checkbox.removeAttribute("checked");
        checkbox.defaultChecked = false;
        checkbox.checked = false;
      }

      const { hideCheckbox, callbackFn, setColorFn, getColorFn } = this;
      btn.style.display = checkbox.checked || hideCheckbox ? "" : "none";

      if (callbackFn != null) {
        callbackFn(color);
      }

      if (!disableUpdate) {
        this.value = color;

        // Checks if the color value needs to be updated in the model
        const { value } = this;
        if (forceUpdate || hideCheckbox || getColorFn() != value) {
          setColorFn(value);
        }
      }

      this.applying = false;
    }
  };
}
