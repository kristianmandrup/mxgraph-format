import { BaseFormatPanel } from "../../base/BaseFormatPanel";
import { GeometryManager } from "../geometry/GeometryManager";
import { Table } from "../Table";
import { PanelInit } from "./init/Init";
import { Flip } from "./flip/Flip";
import { Align } from "./align/Align";
import { Group } from "./group/Group";
import { Layer } from "./layer/Layer";
import { Distribute } from "./distribute/Distribute";
import { Angle } from "./angle/Angle";

/**
 * Adds the label menu items to the given menu and parent.
 */
export class ArrangePanel extends BaseFormatPanel {
  editorUi: any;
  format: any;
  container: any;
  getUnit: any;
  getUnitStep: any;
  isFloatUnit: any;
  inUnit: any;
  geometryManager: GeometryManager;

  constructor(format, editorUi, container) {
    super(format, editorUi, container);
    this.geometryManager = this.createGeometryManager();
    this.init();
  }

  createGeometryManager() {
    return new GeometryManager(this.editorUi, this.format, this.container);
  }

  addGeometry() {
    return this.geometryManager.addGeometry(this.container);
  }

  addEdgeGeometry() {
    return this.geometryManager.addEdgeGeometry(this.container);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  init() {
    new PanelInit(this.editorUi, this.format, this.container).init();
  }

  /**
   *
   */
  addTable(div) {
    this.createTable().add(div);
  }

  createTable() {
    return new Table(this.editorUi, this.format);
  }

  /**
   *
   */
  addLayerOps(div) {
    return new Layer(this.editorUi, this.format, this.container).add(div);
  }

  /**
   *
   */
  addGroupOps(div) {
    return new Group(this.editorUi, this.format, this.container).add(div);
  }

  /**
   * add alignment to div
   */
  addAlign(div) {
    return new Align(this.editorUi, this.format, this.container).add(div);
  }

  /**
   *
   */
  addFlip(div) {
    return new Flip(this.editorUi, this.format, this.container).add(div);
  }

  /**
   *
   */
  addDistribute(div) {
    return new Distribute(this.editorUi, this.format, this.container).add(div);
  }

  /**
   *
   */
  addAngle(div) {
    return new Angle(this.editorUi, this.format, this.container).add(div);
  }
}
