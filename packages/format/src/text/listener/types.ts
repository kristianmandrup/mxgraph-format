// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  BaseFormatListener: Symbol("BaseFormatListener"),
  PositionChangeListener: Symbol("PositionChangeListener"),
  TextFormatListener: Symbol("TextFormatListener"),
};

export default TYPES;
