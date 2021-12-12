import { Events, Render } from "matter-js";

export function viewOn(obj) {
  Events.on(this.render, "beforeRender", () => {
    //console.log(obj)
    let speed = obj.centerBody.velocity.x;

    let prev = obj.centerBody.prevVelocity
      ? obj.centerBody.prevVelocity
      : false;

    const abs = Math.abs;

    if (prev && abs((abs(prev) - abs(speed)) > 1)) {
      if (abs(prev) < abs(speed))
        speed = prev + (prev ? 0.9 : -0.9);
      if (abs(prev) > abs(speed))
        speed = prev - (prev ? 0.9 : -0.9);
    }

    //console.log("prevVelocity",obj.centerBody.prevVelocity)
    obj.centerBody.prevVelocity = speed;

    //console.log("speed", speed);

    let xOffset = 0;
    xOffset = speed * 30;

    let xOffsetAcc = speed * 10 + (speed * speed * speed) / 90;

    Render.lookAt(
      this.render,
      {
        x: obj.getCenterBody().bounds.max.x + xOffsetAcc + 250,
        y: obj.getCenterBody().bounds.min.y - 200,
      },
      {
        x: this.viewport.x + Math.abs(xOffset),
        y: this.viewport.y,
      }
    );
  });
}
