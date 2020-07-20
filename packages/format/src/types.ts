import styleTypes from "./style/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
const TYPES = {
  Unit: Symbol("Unit"),
  Format: Symbol("Format"),
  ...styleTypes,
};

export default TYPES;
