import { Bodies, Composite, Engine, Events, Render, Runner } from "matter-js";
import CircleObj from "../gameObjects/CircleObj";
import PlayerCar from "../gameObjects/PlayerCar/PlayerCar";
import { defaultBodyStyleRender } from "../gameObjects/PlayerCar/config";
import { addEvents } from "./events/addEvents";
import { viewOn } from "./events/viewOn";

export function init(scene) {
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

  Composite.add(
    this.engine.world,
    Bodies.rectangle(400, 610, 5510, 60, {
      isStatic: true,
      friction: 1,
      render: defaultBodyStyleRender,
    })
  );

  const block = Bodies.rectangle(550, 60, 150, 60, {
    render: { fillStyle: "white", strokeStyle: "black", lineWidth: 1 },
  });
  Composite.add(this.engine.world, block);

  viewOn.call(this, playerCar);

  addEvents.call(this);

  Render.run(this.render);
  Runner.run(this.runner, this.engine);
  this.gameObjects.forEach((obj) => {
    Composite.add(this.engine.world, obj.composite);
  });
}
