import arrangeTypes from "./arrange/types";
import baseTypes from "./base/types";
import diagramTypes from "./diagram/types";
import styleTypes from "./style/types";
import formatTypes from "./format/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  ...arrangeTypes,
  ...baseTypes,
  ...styleTypes,
  ...diagramTypes,
  ...formatTypes,
};

export default TYPES;
