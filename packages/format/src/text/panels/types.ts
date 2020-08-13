import fontColorTypes from "./font-color/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  BackgroundPanel: Symbol("BackgroundPanel"),
  ContainerPanel: Symbol("ContainerPanel"),
  ExtraPanel: Symbol("ExtraPanel"),
  ...fontColorTypes,
};

export default TYPES;
