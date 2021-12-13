import { Bodies, Composite } from "matter-js";
import CircleObj from "../../gameObjects/CircleObj";
import { defaultBodyStyleRender } from "../../gameObjects/PlayerCar/config";
import PlayerCar from "../../gameObjects/PlayerCar/PlayerCar";
import { viewOn } from "./viewOn";


export function addWorldObjects(){

  const circleObj = new CircleObj(400, 300, 30);
  this.gameObjects.push(circleObj);
  const playerCar = new PlayerCar(50, 200);
  this.gameObjects.push(playerCar);

  const ground1 = Bodies.rectangle(400, 610, 5000, 60, {
    isStatic: true,
    //friction: 1,
    render: defaultBodyStyleRender,
  });

  const ground2 = Bodies.rectangle(5100, -210, 5000, 60, {
    isStatic: true,
    //friction: 1,
    angle:-0.39,
    render: defaultBodyStyleRender,
  })
  
  
  const block = Bodies.rectangle(3000, 150, 150, 60, {
    isStatic:true,
    angle:-3.141,
    render: { fillStyle: "white", strokeStyle: "black", lineWidth: 1 },
  });

  const block2 = Bodies.rectangle(-2100, 550, 150, 60, {
    isStatic:true,
    angle:-3.141,
    render: { fillStyle: "white", strokeStyle: "black", lineWidth: 1 },
  });
  Composite.add(this.engine.world, [block, block2, ground1, ground2]);

  this.gameObjects.forEach((obj) => {
    Composite.add(this.engine.world, obj.composite);
  });

  return playerCar;
}