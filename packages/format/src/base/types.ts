import { TYPES as optionTypes } from "./options";
// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  Arrow: Symbol("Arrow"),
  // Base: Symbol("Base"),
  BaseFormatPanel: Symbol("BaseFormatPanel"),
  Buttons: Symbol("Buttons"),
  InputHandlerInstaller: Symbol("InputHandlerInstaller"),
  SelectionState: Symbol("SelectionState"),
  Stepper: Symbol("Stepper"),
  UnitInput: Symbol("UnitInput"),
  ...optionTypes,
};

export default TYPES;
