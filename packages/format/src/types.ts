import arrangeTypes from "./arrange/types";
import baseTypes from "./base/types";
import diagramTypes from "./diagram/types";
import formatTypes from "./format/types";
import refresherTypes from "./refresher/types";
import styleTypes from "./style/types";
import textTypes from "./text/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  ...arrangeTypes,
  ...baseTypes,
  ...diagramTypes,
  ...formatTypes,
  ...refresherTypes,
  ...styleTypes,
  ...textTypes,
};

export default TYPES;
