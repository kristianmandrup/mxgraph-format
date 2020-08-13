// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  CssColorUpdater: Symbol("CssColorUpdater"),
  NodeStyleUpdater: Symbol("NodeStyleUpdater"),
  UpdateCssUpdater: Symbol("UpdateCssUpdater"),
};

export default TYPES;
