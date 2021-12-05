import { Engine, Events, Render, Runner, World } from "matter-js";
import { addBodies } from "./addBodies";

export function initGame(scene) {
  const engine = Engine.create();
  const render = Render.create({
    element: scene.current,
    engine: engine,
    options: {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      wireframes: false,
      background: "lightblue",
    },
  });

  addBodies(engine);

  const runner = Runner.create();

  const game = {
    render,
    runner,
    engine,
    scene
  };

  Render.run(render);
  Runner.run(runner, engine);
  window.game = game;

  
  return game;
}

export function destroyGame(game) {
  Render.stop(game.render);
  World.clear(game.engine.world);
  Engine.clear(game.engine);
  game.render.canvas.remove();
  game.render.canvas = null;
  game.render.context = null;
  game.render.textures = {};
}
