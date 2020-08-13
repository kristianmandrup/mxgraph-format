// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
const TYPES = {
  ColorUpdater: Symbol("ColorUpdater"),
  EditFontColorOption: Symbol("EditFontColorOption"),
  FontColorOption: Symbol("FontColorOption"),
  FontColorPanel: Symbol("FontColorPanel"),
};

export default TYPES;
