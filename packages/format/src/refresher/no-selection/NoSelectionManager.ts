import mx from "../../text/handler/style/node_modules/@mxgraph-app/mx";
import { BaseRefreshManager } from "../BaseRefreshManager";
import { DiagramFormatPanel } from "../../diagram";
const { mxEvent } = mx;

export class NoSelectionManager extends BaseRefreshManager {
  closeImage: any; // Dialog.prototype.closeImage
  showCloseButton: boolean = true;

  createImage() {
    const { resource } = this;
    var img = document.createElement("img");
    img.setAttribute("border", "0");
    img.setAttribute("src", this.closeImage);
    img.setAttribute("title", resource("hide"));
    img.style.position = "absolute";
    img.style.display = "block";
    img.style.right = "0px";
    img.style.top = "8px";
    img.style.cursor = "pointer";
    img.style.marginTop = "1px";
    img.style.marginRight = "17px";
    img.style.border = "1px solid transparent";
    img.style.padding = "1px";
    img.style.opacity = "0.5";
    return img;
  }

  onNoSelection() {
    const { write, label, div, ui, resource } = this;
    write(label, resource("diagram"));
    label.style.borderLeftWidth = "0px";

    // Adds button to hide the format panel since
    // people don't seem to find the toolbar button
    // and the menu item in the format menu
    if (this.showCloseButton) {
      var img = this.createImage();
      label.appendChild(img);

      mxEvent.addListener(img, "click", function () {
        ui.actions.get("formatPanel").funct();
      });
    }

    div.appendChild(label);

    const { createDiagramFormatPanel } = this;
    const panel = createDiagramFormatPanel();
    this.panels.push(panel);
  }

  createDiagramFormatPanel() {
    const { ui, div } = this;
    return new DiagramFormatPanel(this, ui, div);
  }
}
