import alignTypes from "./align/types";
import angleTypes from "./angle/types";
import distributeTypes from "./distribute/types";
import flipTypes from "./flip/types";
import groupTypes from "./group/types";
import initTypes from "./init/types";
import layerTypes from "./layer/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  ...alignTypes,
  ...angleTypes,
  ...distributeTypes,
  ...flipTypes,
  ...groupTypes,
  ...initTypes,
  ...layerTypes,
  ArrangePanel: Symbol("Table"),
};

export default TYPES;
