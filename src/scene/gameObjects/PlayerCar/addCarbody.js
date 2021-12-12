import { Bodies, Composite } from "matter-js";


export function addCarbody() {
  const carBody = Bodies.rectangle(this.centerX, this.centerY, 330, 70, {
    collisionFilter: this.bodyOptions.collisionFilter,
    render:{
      sprite:{
         texture:"/sprites/car/car-body.png",
         yScale:1.1,
         xScale:1.0,
      }
  },
    density: 0.0045,
    frictionAir:0.003,
  });
  carBody.isCenterBody = true;
  //Composite.add(this.composite, carBody);
  this.setCenterBody(carBody);
}
