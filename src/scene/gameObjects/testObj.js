import { Bodies, Body, Composite, Constraint } from "matter-js";

const testObj = {};

testObj.init = function () {
  //this.engine = engine;
  this.bodies = [];
  const defaultBodyStyleRender = {
    fillStyle: "white",
    strokeStyle: "black",
    lineWidth: 1,
  };

  console.log("NEW BBJ")
  const ballA = Bodies.circle(400, 200, 40);
  const boxB = Bodies.rectangle(450, 150, 80, 80, {
    render: defaultBodyStyleRender,
  });
  const ground = Bodies.rectangle(400, 610, 1333, 60, {
    isStatic: true,
    render: defaultBodyStyleRender,
  });
  const ballB = Bodies.circle(430, 10, 40, {
    collisionFilter: { group: -1 },
    render: defaultBodyStyleRender,
  });
  //console.log("ballA", ballA);
  let constraint = Constraint.create({
    bodyA: ballA,
    //pointA: { x: -10, y: -10 },
    bodyB: ballB,
    //pointB: { x: -10, y: -10 }
  });
  //console.log('ground',ground)
  //console.log('boxA',boxA)
  ballA.force = { x: 0.1, y: 0 };
  Body.setAngularVelocity(ballA, Math.PI / 6);
  //engine.gravity.y = 0.5;
  //Composite.add(engine.world, [ballA, boxB, ballB, ground, constraint]);
  return ballA;
};

export default testObj;
