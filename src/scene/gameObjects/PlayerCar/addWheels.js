import { Bodies, Composite, Constraint } from "matter-js";

export function addWheels() {
  const wheelFront = Bodies.circle(this.centerX + 132, this.centerY + 20, 45, {
    collisionFilter: this.bodyOptions.collisionFilter,
    render:{
        sprite:{
           texture:"/sprites/car/car-wheel.png",
           yScale:1.0,
           xScale:1.0,
        }
    },
    friction: 1,
  });

  Composite.add(this.composite, wheelFront);

  const axelFrontWheel = Constraint.create({
    bodyB: this.getCenterBody(),
    pointB: { x: 100, y: -20 },
    bodyA: wheelFront,
    stiffness: 0.2,
    render:{visible:false}
  });
  const axelFrontWheel2 = Constraint.create({
    bodyB: this.getCenterBody(),
    pointB: { x: 0, y: 10 },
    bodyA: wheelFront,
    stiffness: 0.8,
    render:{visible:false}
  });
  Composite.add(this.composite, [axelFrontWheel, axelFrontWheel2]);

  const wheelRear = Bodies.circle(this.centerX - 108, this.centerY + 20, 45, {
    collisionFilter: this.bodyOptions.collisionFilter,
    render:{
        sprite:{
           texture:"/sprites/car/car-wheel.png",
           yScale:1.0,
           xScale:1.0,
        }
    },
    restitution: 1,
    friction: 1,
    label: "drive",
  });

  const wheelRearSensor = Bodies.circle(
    this.centerX - 100,
    this.centerY + 45,
    60,
    {
      collisionFilter: this.bodyOptions.collisionFilter,
      render: {
        visible: false,
      },
      isSensor: true,
      label: "driveSensor",
    }
  );

  const axelRearWheelSensor = Constraint.create({
    bodyB: wheelRearSensor,
    bodyA: wheelRear,
    stiffness: 1,
    length: 0,
  });
  Composite.add(this.composite, [
    wheelRearSensor,
    wheelRear,
    axelRearWheelSensor,
  ]);

  wheelRearSensor.isGroundSensor = true;
  wheelRearSensor.parentObj = this;
  wheelRear.parentObj = this;
  this.drivingWheel = wheelRear;

  const axelRearWheel = Constraint.create({
    bodyB: this.getCenterBody(),
    pointB: { x: -100, y: -20 },
    bodyA: wheelRear,
    stiffness: 0.2,
    render:{visible:false}
  });
  const axelRearWheel2 = Constraint.create({
    bodyB: this.getCenterBody(),
    pointB: { x: 0, y: 10 },
    bodyA: wheelRear,
    stiffness: 0.8,
    render:{visible:false}
  });

  Composite.add(this.composite, [axelRearWheel, axelRearWheel2]);
}
