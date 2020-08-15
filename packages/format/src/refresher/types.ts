import editingTypes from "./editing/types";
import selectionTypes from "./selection/types";
import noSelectionTypes from "./no-selection/types";

const TYPES = {
  ...editingTypes,
  ...selectionTypes,
  ...noSelectionTypes,
  FormatRefresher: Symbol("FormatRefresher"),
};

export default TYPES;
