import { Engine, Events, Render, Runner, World } from "matter-js";
import { addBodies } from "./addBodies";
import InitGameObjects from "./InitGameObjects";

const Game = {
  init: function (scene) {
    this.engine = Engine.create();
    this.runner = Runner.create();
    this.scene = scene;
    this.initGameObjects = InitGameObjects;
    this.render = Render.create({
      element: scene.current,
      engine: this.engine,
      options: {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        wireframes: false,
        background: "#f3f3f3",
      },
    });
    addBodies(this.engine);

    //this.addGameObjects(this.gameObjects);

    this.initGameObjects.map((obj) => {
      obj.init(this.engine);
    });

    Render.run(this.render);
    Runner.run(this.runner, this.engine);
  },
  destroy: function () {
    Render.stop(this.render);
    World.clear(this.engine.world);
    Engine.clear(this.engine);
    this.render.canvas.remove();
    this.render.canvas = null;
    this.render.context = null;
    this.render.textures = {};
  },
  restart: function () {
    this.destroy();
    this.init(this.scene);
  },
  stop: function () {
    this.runner.enabled = false;
  },
  start: function () {
    this.runner.enabled = true;
  },
  addGameObject: function (obj) {
    obj.init(this.engine);
  },
};

export default Game;
