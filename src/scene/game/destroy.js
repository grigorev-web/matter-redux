import { Engine, Render, World } from "matter-js";

export function destroy() {
    Render.stop(this.render);
    World.clear(this.engine.world);
    Engine.clear(this.engine);
    this.render.canvas.remove();
    this.render.canvas = null;
    this.render.context = null;
    this.render.textures = {};
    this.gameObjects.forEach((obj) => {
      obj.clear();
    });
    this.gameObjects = [];
    //console.log("ENGINE WORLD",this.engine)
  }