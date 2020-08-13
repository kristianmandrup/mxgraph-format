import panelsTypes from "./panels/types";
import listenerTypes from "./listener/types";
import handlerTypes from "./handler/types";
import fontTypes from "./font/types";
import buttonsTypes from "./buttons/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  TextFormatPanel: Symbol("TextFormatPanel"),
  ...fontTypes,
  ...buttonsTypes,
  ...listenerTypes,
  ...handlerTypes,
  ...panelsTypes,
};

export default TYPES;
