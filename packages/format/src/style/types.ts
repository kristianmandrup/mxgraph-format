import strokeTypes from "./stroke/types";
import svgTypes from "./svg/types";

const TYPES = {
  ...strokeTypes,
  ...svgTypes,
  EditOps: Symbol("EditOps"),
  Effects: Symbol("Effects"),
  Initializer: Symbol("Initializer"),
  LineJumps: Symbol("LineJumps"),
  Fill: Symbol("Fill"),
  StyleFormatPanel: Symbol("StyleFormatPanel"),
  StyleOpts: Symbol("StyleOpts"),
};

export default TYPES;
