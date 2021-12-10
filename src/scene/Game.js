import {
  Bodies,
  Bounds,
  Composite,
  Engine,
  Events,
  Render,
  Runner,
  World,
} from "matter-js";
import { gameConfig } from "./gameConfig";
import CircleObj from "./gameObjects/CircleObj";
import PlayerCar from "./gameObjects/PlayerCar";


const Game = {
  gameObjects: [],
  scene: {},
  viewport: gameConfig.viewport,
  renderOptions: {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    wireframes: false,
    background: "#f3f3f3",
  },

  init: function (scene) {
    this.scene = scene;
    this.engine = Engine.create();
    this.runner = Runner.create();

    const circleObj = new CircleObj(400, 300, 30);
    this.gameObjects.push(circleObj);
    const playerCar = new PlayerCar(50, 200);
    this.gameObjects.push(playerCar);

    this.render = Render.create({
      element: scene.current,
      engine: this.engine,
      options: this.renderOptions,
    });

    this.run();

    Composite.add(
      this.engine.world,
      Bodies.rectangle(400, 610, 5510, 60, {
        isStatic: true,
        friction:1,
        render: playerCar.defaultBodyStyleRender,
      })
    );

    const block = Bodies.rectangle(550, 60, 150, 60, {
      render: { fillStyle: "white", strokeStyle: "black", lineWidth: 1 },
    });
    Composite.add(this.engine.world, block);
    console.log("player", playerCar.drivingWheel);
    Events.on(this.render, "beforeRender", () =>
      Render.lookAt(this.render, playerCar.getCenterBody(), {
        x: this.viewport.x + this.viewport.xOffset,//playerCar.getCenterBody().velocity.x * 100,
        y: this.viewport.y + this.viewport.yOffset,//playerCar.getCenterBody().velocity.y * 100,
      })
    );
  },
  destroy: function () {
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
  addGameObjects: function () {
    this.gameObjects.forEach((obj) => {
      Composite.add(this.engine.world, obj.composite);
    });
  },
  run() {
    Render.run(this.render);
    Runner.run(this.runner, this.engine);
    this.addGameObjects();
  },
  toggleDebug() {
    this.render.options.showPerformance = !this.render.options.showPerformance;
    this.render.options.wireframes = !this.render.options.wireframes;
    this.render.options.showAngleIndicator = !this.render.options.showAngleIndicator;
    this.render.options.showBroadphase = !this.render.options.showBroadphase; 
    this.render.options.showSeparations = !this.render.options.showSeparations; 
  },
};

export default Game;
