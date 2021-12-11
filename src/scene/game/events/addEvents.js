import { Events } from "matter-js";
import { moveCreatures } from "./moveCreatures";

export function addEvents() {
  moveCreatures.call(this);

  Events.on(this.engine, "collisionActive", (event) => {
    var pairs = event.pairs;
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];
        
      if (pair.bodyA.isGroundSensor) {
        pair.bodyA.render.fillStyle = "#333";
        pair.bodyA.parentObj.onGround = true;
      }
      if (pair.bodyB.isGroundSensor) {
        pair.bodyB.render.fillStyle = "#333";
        pair.bodyB.parentObj.onGround = true;
      }
    }
  });

  Events.on(this.engine, "collisionEnd", (event) => {
    var pairs = event.pairs;
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];

      if (pair.bodyA.isGroundSensor) {
        pair.bodyA.render.fillStyle = "white";
        pair.bodyA.parentObj.onGround = false;
      }
      if (pair.bodyB.isGroundSensor) {
        pair.bodyB.render.fillStyle = "white";
        pair.bodyB.parentObj.onGround = false;
      }
    }
  });
}
