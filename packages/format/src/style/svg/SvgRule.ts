import mx from "@mxgraph-app/mx";
import { BaseStyleFormat } from "../BaseStyleFormat";
const { mxConstants, mxResources, mxUtils } = mx;

export class SvgRule extends BaseStyleFormat {
  panel: any;

  constructor(panel, { format, editorUi, container }) {
    super(format, editorUi, container);
    this.panel = panel;
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addSvgRule({ container, rule, svg, styleElem, rules, ruleIndex, regex }) {
    var ui = this.editorUi;
    var graph = ui.editor.graph;

    if (regex.test(rule.selectorText)) {
      function rgb2hex(rgb) {
        rgb = rgb.match(
          /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
        );

        return rgb && rgb.length === 4
          ? "#" +
              ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
              ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
              ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
          : "";
      }

      var addStyleRule = (rule, key, label) => {
        if (rule.style[key] != "") {
          var option = this.createColorOption(
            label + " " + rule.selectorText,
            () => {
              return rgb2hex(rule.style[key]);
            },
            function (color) {
              rules[ruleIndex].style[key] = color;
              var cssTxt = "";

              for (var i = 0; i < rules.length; i++) {
                cssTxt += rules[i].cssText + " ";
              }

              styleElem.textContent = cssTxt;
              var xml = mxUtils.getXml(svg.documentElement);

              graph.setCellStyles(
                mxConstants.STYLE_IMAGE,
                "data:image/svg+xml," + btoa(xml),
                graph.getSelectionCells()
              );
            },
            "#ffffff",
            {
              install: function () {
                // ignore
              },
              destroy: function () {
                // ignore
              },
            }
          );

          container.appendChild(option);

          // Shows container if rules are added
          container.style.display = "";
        }
      };

      addStyleRule(rule, "fill", mxResources.get("fill"));
      addStyleRule(rule, "stroke", mxResources.get("line"));
    }
  }
}
