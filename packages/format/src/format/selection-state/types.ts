// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  SelectionStateUpdater: Symbol("SelectionStateUpdater"),
  StateChecker: Symbol("StateChecker"),
};

export default TYPES;
