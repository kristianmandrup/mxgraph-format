import { TYPES as selectionStateTypes } from "./selection-state";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  Unit: Symbol("Unit"),
  Format: Symbol("Format"),
  ...selectionStateTypes,
};

export default TYPES;
