import { Bodies, Composite } from "matter-js";


export function addCarbody() {
  const carBody = Bodies.rectangle(this.centerX, this.centerY, 320, 60, {
    collisionFilter: this.bodyOptions.collisionFilter,
    render:{
      sprite:{
         texture:"/sprites/car/car-body.png",
         yScale:1.1,
         xScale:1.0,
      }
  },
    density: 0.003,
  });
  
  //Composite.add(this.composite, carBody);
  this.setCenterBody(carBody);
}
