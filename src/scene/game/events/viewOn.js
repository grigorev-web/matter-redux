import { Events, Render } from "matter-js";

export function viewOn(obj) {
  Events.on(this.render, "beforeRender", () => {
    //console.log(obj)
    let speed = obj.centerBody.velocity.x;

    let prev = obj.centerBody.prevVelocity
      ? obj.centerBody.prevVelocity
      : false;

    const abs = Math.abs;
    const diff = abs(prev - speed);
    if (prev && diff > 0.1) {
      if (diff > 20) speed = prev < speed ? prev + 0.4 : prev - 0.4;
      else speed = prev < speed ? prev + 0.15 : prev - 0.15;
    }

    obj.centerBody.prevVelocity = speed;

    let xOffset = 0;
    xOffset = speed * 35;

    let xOffsetAcc = speed * 10 + (speed * speed * speed) / 120;

    Render.lookAt(
      this.render,
      {
        x: obj.getCenterBody().bounds.max.x + xOffsetAcc + 250,
        y: obj.getCenterBody().bounds.min.y - 200,
      },
      {
        x: this.viewport.x + abs(xOffset),
        y: this.viewport.y,
      }
    );

    if (this.render.options.throtlingPrallax % 4 === 0) {
      this.render.canvas.style.backgroundPositionX =
        this.render.bounds.max.x / 1000 + "%";
    }
   
    this.render.options.throtlingPrallax++;
  });
}
