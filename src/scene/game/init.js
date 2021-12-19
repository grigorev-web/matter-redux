import { Engine, Render, Runner } from "matter-js";
import { addEvents } from "./events/addEvents";
import { viewOn } from "./events/viewOn";
import { addWorldObjects } from "./addWorldObjects";

export function init(scene) {
  this.scene = scene;
  this.engine = Engine.create();
  this.runner = Runner.create();



  this.render = Render.create({
    element: scene.current,
    engine: this.engine,
    options: this.renderOptions,
  });
  //window.render = this.render
  
  const player = addWorldObjects.call(this);
  viewOn.call(this, player);
  addEvents.call(this);

  Render.run(this.render);
  Runner.run(this.runner, this.engine);
  this.render.canvas.style.backgroundSize = "cover"
  
}
