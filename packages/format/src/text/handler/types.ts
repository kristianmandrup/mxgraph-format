import styleTypes from "./style/types";
import fontSizeTypes from "./font-size/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  BaseFormatHandler: Symbol("BaseFormatHandler"),
  InputHandler: Symbol("InputHandler"),
  ...styleTypes,
  ...fontSizeTypes,
};

export default TYPES;
