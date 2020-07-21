import { BaseRefreshManager } from "../BaseRefreshManager";
import { TextFormatPanel } from "../../text";

export class EditingManager extends BaseRefreshManager {
  onIsEditing() {
    const { label, div, createTextPanel, resource, write } = this;
    write(label, resource("text"));
    div.appendChild(label);
    const panel = createTextPanel();
    this.panels.push(panel);
  }

  createTextPanel() {
    const { ui, div } = this;
    return new TextFormatPanel(this, ui, div);
  }
}
