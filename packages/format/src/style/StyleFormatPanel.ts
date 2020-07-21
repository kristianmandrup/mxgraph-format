import { BaseStyleFormat } from "./BaseStyleFormat";
import { Fill } from "./Fill";
import { StrokeFormat } from "./stroke";
import { Initializer } from "./Initializer";
import { SvgStyles, SvgRule } from "./svg";
import { EditOps } from "./EditOps";
import { LineJumps } from "./LineJumps";
import { Effects } from "./Effects";
import { StyleOps } from "./StyleOps";

/**
 * Adds the label menu items to the given menu and parent.
 */
export class StyleFormatPanel extends BaseStyleFormat {
  createCellOption: any;

  constructor(format, editorUi, container) {
    super(format, editorUi, container);
    this.init();
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  init() {
    new Initializer(this, {
      format: this.format,
      editorUi: this.editorUi,
      container: this.container,
    }).init();
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addSvgStyles(container) {
    return new SvgStyles(this, {
      format: this.format,
      editorUi: this.editorUi,
      container: this.container,
    }).addSvgStyles(container);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addSvgRule(container, rule, svg, styleElem, rules, ruleIndex, regex) {
    return new SvgRule(this, {
      format: this.format,
      editorUi: this.editorUi,
      container: this.container,
    }).addSvgRule({
      container,
      rule,
      svg,
      styleElem,
      rules,
      ruleIndex,
      regex,
    });
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addEditOps(div) {
    return new EditOps(this, {
      format: this.format,
      editorUi: this.editorUi,
      container: this.container,
    }).addEditOps(div);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addFill(container?) {
    return new Fill(
      this.format,
      this.editorUi,
      container || this.container
    ).addFill();
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addStroke(container) {
    return new StrokeFormat(this.format, this.editorUi, this.container).add(
      container
    );
  }

  /**
   * Adds UI for configuring line jumps.
   */
  addLineJumps(container) {
    return new LineJumps(
      this.format,
      this.editorUi,
      this.container
    ).addLineJumps(container);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addEffects(div) {
    return new Effects(this.format, this.editorUi, this.container).addEffects(
      div
    );
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addStyleOps(div) {
    return new StyleOps(this.format, this.editorUi, this.container).addStyleOps(
      div
    );
  }
}
