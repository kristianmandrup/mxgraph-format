import mx from "@mxgraph-app/mx";
// import { Dialog } from "@mxgraph-app/dialogs";
import { TextFormatPanel } from "../text/TextFormatPanel";
import { OnSelectionManager } from "./selection/OnSelectionManager";
import { NoSelectionManager } from "./no-selection/NoSelectionManager";
import { BaseRefreshManager } from "./BaseRefreshManager";
const { mxClient, mxEvent } = mx;

export class FormatRefresher extends BaseRefreshManager {
  container: any;
  editorUi: any;
  format: any;
  showCloseButton: any;
  panels: any[] = [];
  clear: any;
  getSelectionState: any; // () => void

  _div: any;
  _label: any;

  get ui() {
    return this.editorUi;
  }

  get graph() {
    return this.ui.editor.graph;
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  refresh() {
    const { graph, container, div, label } = this;
    // Performance tweak: No refresh needed if not visible
    if (this.container.style.width == "0px") {
      return;
    }

    this.clear();
    container.appendChild(div);

    // Prevents text selection
    mxEvent.addListener(
      label,
      mxClient.IS_POINTER ? "pointerdown" : "mousedown",
      (evt) => {
        evt.preventDefault();
      }
    );

    if (graph.isSelectionEmpty()) {
      this.onNoSelection();
    } else if (graph.isEditing()) {
      this.onIsEditing();
    } else {
      this.onSelection();
    }
  }

  onSelection() {
    new OnSelectionManager(
      this.format,
      this.editorUi,
      this.container
    ).onSelection();
  }

  onIsEditing() {
    const { label, div, ui, resource, write } = this;
    write(label, resource("text"));
    div.appendChild(label);
    this.panels.push(new TextFormatPanel(this, ui, div));
  }

  onNoSelection() {
    new NoSelectionManager(
      this.format,
      this.editorUi,
      this.container
    ).onNoSelection();
  }
}
