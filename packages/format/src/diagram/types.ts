// for use with IoC: Inversify dependency injection
// https://dev.to/tkssharma/inversion-of-control-with-typescript-node-inversify-nmm
export const TYPES = {
  DiagramFormatPanel: Symbol("DiagramFormatPanel"),
  GraphUpdater: Symbol("GraphUpdater"),
  GridOption: Symbol("GridOption"),
  PanelOptions: Symbol("PanelOptions"),
  PaperSize: Symbol("PaperSize"),
  StyleOpts: Symbol("StyleOpts"),
};

export default TYPES;
