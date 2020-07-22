import { BaseRefreshManager } from "../BaseRefreshManager";
import { TextFormatPanel } from "../../text";
import { StyleFormatPanel } from "../../style";
import { ArrangePanel } from "../../arrange";
import mx from "@mxgraph-app/mx";
const { mxEvent, mxClient } = mx;

export class SelectionManager extends BaseRefreshManager {
  currentLabel: any;
  currentPanel: any;

  get containsLabel() {
    const ss: any = this.getSelectionState();
    return ss && ss.containsLabel;
  }

  inactiveTabBackgroundColor: any;

  onSelection() {
    const {
      containsLabel,
      ui,
      label,
      div,
      addClickHandler,
      write,
      resource,
    } = this;

    var idx = 0;
    this.styleLabel(label);
    var label2: any = label.cloneNode(false);
    var label3: any = label2.cloneNode(false);

    // Workaround for ignored background in IE
    label2.style.backgroundColor = this.inactiveTabBackgroundColor;
    label3.style.backgroundColor = this.inactiveTabBackgroundColor;

    // Style
    if (containsLabel) {
      label2.style.borderLeftWidth = "0px";
    } else {
      label.style.borderLeftWidth = "0px";
      write(label, resource("style"));
      div.appendChild(label);

      var stylePanel: any = div.cloneNode(false);
      stylePanel.style.display = "none";
      this.panels.push(new StyleFormatPanel(this, ui, stylePanel));
      this.container.appendChild(stylePanel);

      addClickHandler(label, stylePanel, idx++);
    }

    // Text
    write(label2, resource("text"));
    div.appendChild(label2);

    var textPanel: any = div.cloneNode(false);
    textPanel.style.display = "none";
    this.panels.push(new TextFormatPanel(this, ui, textPanel));
    this.container.appendChild(textPanel);

    // Arrange
    write(label3, resource("arrange"));
    div.appendChild(label3);

    var arrangePanel: any = div.cloneNode(false);
    arrangePanel.style.display = "none";
    this.panels.push(new ArrangePanel(this, ui, arrangePanel));
    this.container.appendChild(arrangePanel);

    addClickHandler(label2, textPanel, idx++);
    addClickHandler(label3, arrangePanel, idx++);
  }

  styleLabel(label) {
    const { containsLabel } = this;
    label.style.backgroundColor = this.inactiveTabBackgroundColor;
    label.style.borderLeftWidth = "1px";
    label.style.cursor = "pointer";
    label.style.width = containsLabel ? "50%" : "33.3%";
    label.style.width = containsLabel ? "50%" : "33.3%";
  }

  addClickHandler = (elt, panel, index) => {
    const { currentLabel, containsLabel, currentPanel } = this;
    var clickHandler = (_evt?) => {
      if (currentLabel != elt) {
        if (containsLabel) {
          this.labelIndex = index;
        } else {
          this.currentIndex = index;
        }

        if (currentLabel != null) {
          currentLabel.style.backgroundColor = this.inactiveTabBackgroundColor;
          currentLabel.style.borderBottomWidth = "1px";
        }

        this.currentLabel = elt;
        currentLabel.style.backgroundColor = "";
        currentLabel.style.borderBottomWidth = "0px";

        if (currentPanel != panel) {
          if (currentPanel != null) {
            currentPanel.style.display = "none";
          }

          this.currentPanel = panel;
          currentPanel.style.display = "";
        }
      }
    };

    mxEvent.addListener(elt, "click", clickHandler);

    // Prevents text selection
    mxEvent.addListener(
      elt,
      mxClient.IS_POINTER ? "pointerdown" : "mousedown",
      (evt) => {
        evt.preventDefault();
      }
    );

    if (index == (containsLabel ? this.labelIndex : this.currentIndex)) {
      // Invokes handler directly as a workaround for no click on DIV in KHTML.
      clickHandler();
    }
  };
}
