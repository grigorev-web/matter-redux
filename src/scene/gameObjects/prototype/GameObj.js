import { Composite } from "matter-js";
import { defaultBodyOptions } from "./defaultBodyOptions";

class GameObj {
  composite;
  events = {};
  bodyOptions = defaultBodyOptions;
  onGround = false;
  isCreature = false;

  constructor(name, x, y) {
    this.centerX = x;
    this.centerY = y;
    this.name = name;
    this.composite = Composite.create({ label: this.name });
  }
  create() {
    return this.composite;
  }
  clear() {
    Object.entries(this.events).map(function ([type, func]) {
      document.body.removeEventListener(type, func);
    });
    this.composite = null;
  }
  setCenterBody(body) {
    this.centerBody = body;
  }
  getCenterBody() {
    return this.centerBody;
  }
}
export default GameObj;
