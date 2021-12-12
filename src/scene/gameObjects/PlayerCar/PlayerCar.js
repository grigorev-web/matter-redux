import GameObj from "../prototype/GameObj";
import { addCarbody } from "./addCarbody";
import { addHero } from "./addHero";
import { addWheels } from "./addWheels";

class PlayerCar extends GameObj {
  drivingWheel;
  pressedKeys = {};
  gas = false;
  brake = false;
  isCreature = true;

  constructor(x, y) {
    super("player", x, y);

    addCarbody.call(this);
    addHero.call(this);
    addWheels.call(this);
    this.addEvents();
  }
  addEvents() {
    const eventDown = "keydown";
    const keyDownListener = (e) => this.eventDownHandler(e);
    document.body.addEventListener(eventDown, keyDownListener);
    this.events[eventDown] = keyDownListener;

    const eventUp = "keyup";
    const keyUpListener = (e) => this.eventUpHandler(e);
    document.body.addEventListener(eventUp, keyUpListener);
    this.events[eventUp] = keyUpListener;
  }

  eventDownHandler(e) {
    if (this.pressedKeys[e.code] === true) return;
    this.pressedKeys[e.code] = true;
    //console.log(e.code, "press")

    if (e.code === "KeyD") this.gas = true;
    if (e.code === "KeyA") this.brake = true;
  }
  eventUpHandler(e) {
    if (this.pressedKeys[e.code] === false) return;
    this.pressedKeys[e.code] = false;
    //console.log(e.code, "up")

    if (e.code === "KeyD") this.gas = false;
    if (e.code === "KeyA") this.brake = false;
  }
  move() {
    //if(this.onGround) this.getCenterBody().head.render.sprite.texture = "#333";
    //else this.getCenterBody().render.fillStyle = "white";
    const drive = this.drivingWheel;
    if (this.gas) {
      if (this.onGround) {
        drive.parentObj.getCenterBody().force.x = 0.04;
        drive.force.x = 0.05;
        
      }
      if (drive.angularVelocity < 0.6) {
        drive.torque = 4.5;
        // if (onGround)
      }
    }
    if (this.brake) {
      //console.log("brake");
      if (this.onGround) drive.parentObj.getCenterBody().force.x = -0.05;
      if (drive.angularVelocity > -0.6) drive.torque = -4.5;
    }
    //console.log("MOVE");
  }
}

export default PlayerCar;
