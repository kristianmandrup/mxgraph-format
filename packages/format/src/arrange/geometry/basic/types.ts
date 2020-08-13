// import geometryTypes from "./geometry/types";
// import panelTypes from "./panel/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  BasicGeometryHandler: Symbol("BasicGeometryHandler"),
  BasicGeometryManager: Symbol("BasicGeometryManager"),
  BasicListener: Symbol("BasicListener"),
  BasicManager: Symbol("BasicManager"),
};

export default TYPES;
