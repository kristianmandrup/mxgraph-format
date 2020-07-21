import mx from "@mxgraph-app/mx";
import { BaseStyleFormat } from "../BaseStyleFormat";
const { mxUtils } = mx;

export class SvgStyles extends BaseStyleFormat {
  panel: any;

  constructor(panel, { format, editorUi, container }) {
    super(format, editorUi, container);
    this.panel = panel;
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addSvgStyles(container) {
    // var ui = this.editorUi;
    // var graph = ui.editor.graph;
    var ss = this.format.getSelectionState();
    container.style.paddingTop = "6px";
    container.style.paddingBottom = "6px";
    container.style.fontWeight = "bold";
    container.style.display = "none";

    try {
      var exp = ss.style.editableCssRules;

      if (exp != null) {
        var regex = new RegExp(exp);

        var data = ss.style.image.substring(ss.style.image.indexOf(",") + 1);
        var xml = atob(data); // : Base64.decode(data, true);
        var svg = mxUtils.parseXml(xml);

        if (svg != null) {
          var styles = svg.getElementsByTagName("style");

          for (var i = 0; i < styles.length; i++) {
            var rules = this.getCssRules(mxUtils.getTextContent(styles[i]));

            for (var j = 0; j < rules.length; j++) {
              this.panel.addSvgRule(
                container,
                rules[j],
                svg,
                styles[i],
                rules,
                j,
                regex
              );
            }
          }
        }
      }
    } catch (e) {
      // ignore
    }

    return container;
  }

  /**
   * Use browser for parsing CSS.
   */
  getCssRules(css) {
    var doc = document.implementation.createHTMLDocument("");
    var styleElement: any = document.createElement("style");

    mxUtils.setTextContent(styleElement, css);
    doc.body.appendChild(styleElement);

    return styleElement.sheet.cssRules;
  }
}
