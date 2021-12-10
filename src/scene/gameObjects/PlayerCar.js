import { Bodies, Body, Composite, Constraint } from "matter-js";
import GameObj from "./GameObj";

class PlayerCar extends GameObj {
  drivingWheel;
  pressedKeys ={};

  constructor(x, y) {
    super("player", x, y);

    this.addCarbody();
    this.addWheels();
    this.addEvents();
  }
  addEvents() {
    const event = "keydown";
    const listener = (e) => this.moveForward(e);

    document.body.addEventListener(event, listener);
    this.events[event] = listener;
  }
  addCarbody() {
    const carBody = Bodies.rectangle(this.centerX, this.centerY, 250, 60, {
      ...this.bodyOptions,
      density: 0.001,
    });
    Composite.add(this.composite, carBody);
    this.setCenterBody(carBody);
  }

  addWheels() {
    const wheelFront = Bodies.circle(this.centerX + 100, this.centerY + 40, 45, {
      ...this.bodyOptions,
      friction: 1,
    });

    Composite.add(this.composite, wheelFront);

    const axelFrontWheel = Constraint.create({
      bodyB: this.getCenterBody(),
      pointB: { x: 100, y: -20 },
      bodyA: wheelFront,
      stiffness: 0.12,
    });
    const axelFrontWheel2 = Constraint.create({
      bodyB: this.getCenterBody(),
      pointB: { x: 0, y: 10 },
      bodyA: wheelFront,
      stiffness: 0.8,
    });
    Composite.add(this.composite, [axelFrontWheel, axelFrontWheel2]);

    const wheelRear = Bodies.circle(this.centerX - 100, this.centerY + 40, 45, {
      ...this.bodyOptions,
      restitution: 1,
      friction: 1,
    });

    Composite.add(this.composite, wheelRear);

    this.drivingWheel = wheelRear;
    //Body.setAngularVelocity(this.drivingWheel, 1);

    const axelRearWheel = Constraint.create({
      bodyB: this.getCenterBody(),
      pointB: { x: -100, y: -20 },
      bodyA: wheelRear,
      stiffness: 0.12,
    });
    const axelRearWheel2 = Constraint.create({
      bodyB: this.getCenterBody(),
      pointB: { x: 0, y: 10 },
      bodyA: wheelRear,
      stiffness: 0.8,
    });
    
    Composite.add(this.composite, [axelRearWheel, axelRearWheel2]);
  }
  moveForward(e) {
    
    //if(this.pressedKeys[e.code] === true) {console.log(e,"is pressed");return}
    //this.pressedKeys[e.code] = true;

    const drive = this.drivingWheel;
    //console.log("drive",drive)
    if (e.code === "KeyD") {
      
      if (drive.angularVelocity < 0.8) {
        drive.torque = 8;
        //drive.force.x = 0.1;
      }
    }
    if (e.code === "KeyA") {
      
      if (drive.angularVelocity > -0.8)
        //Body.setAngularVelocity(drive, drive.angularVelocity - 0.1);
        drive.torque = -8;
        //drive.force.x = -0.1;
    }
  }
}

export default PlayerCar;
