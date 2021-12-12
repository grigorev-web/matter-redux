import { Bodies, Composite, Constraint } from "matter-js";

export function addHero() {
  const hero = Bodies.rectangle(this.centerX - 30, this.centerY - 50, 45, 45, {
    collisionFilter: this.bodyOptions.collisionFilter,
    render: {
      sprite: {
        texture: "/sprites/hero/hero.png",
        yScale: 0.9,
        xScale: 0.9,
        yOffset: -0.03,
      },
    },
    density: 0.0005,
    frictionAir:0.001,
    isHero:true,
  });

  const axelFront = Constraint.create({
    bodyB: this.getCenterBody(),
    pointB: { x: 15, y: -20 },
    bodyA: hero,
    pointA: { x: 15, y: -20 },
    stiffness: 0.1,
    render: { 
        visible: false 
    },
  });

  const axelRear = Constraint.create({
    bodyB: this.getCenterBody(),
    pointB: { x: -70, y: -20 },
    bodyA: hero,
    pointA: { x: -20, y: -20 },
    stiffness: 0.1,
    render: { 
        visible: false 
    },
  });

  const axelMiddle = Constraint.create({
    bodyB: this.getCenterBody(),
    pointB: { x: -30, y: -20 },
    bodyA: hero,
    pointA: { x: 0, y: 20 },
    stiffness: 0.03,
    render: { 
        visible: false 
    },
  });
  
  const safetySensor = Bodies.rectangle(this.centerX, this.centerY, 90, 20, {
    //collisionFilter: this.bodyOptions.collisionFilter,
    isSafetySensor:true,
    isSensor:true,
    render: {
    visible:false,
    },
    density: 0.0005,
  });


  const safetyAxel = Constraint.create({
    bodyB: this.getCenterBody(),
    //pointB: { x: -30, y: -20 },
    bodyA: safetySensor,
    //pointA: { x: 0, y: 20 },
    stiffness: 0.9,
    render: { 
        visible: false 
    },
  });

  const safetyAxel2 = Constraint.create({
    bodyB: this.getCenterBody(),
    pointB: { x: -25, y: 0 },
    bodyA: safetySensor,
    pointA: { x: -25, y: 0 },
    stiffness: 0.9,
    render: { 
        visible: false 
    },
  });
  Composite.add(this.composite, [
    hero,
    axelFront,
    axelRear,
    axelMiddle,
    safetySensor,
    safetyAxel,
    safetyAxel2,
    this.getCenterBody(),
  ]);
}
