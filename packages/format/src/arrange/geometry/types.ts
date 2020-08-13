// import geometryTypes from "./geometry/types";
// import panelTypes from "./panel/types";

// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  GeometryHandler: Symbol("GeometryHandler"),
  GeometryManager: Symbol("GeometryManager"),
};

export default TYPES;
