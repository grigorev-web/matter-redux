import { Bodies, Composite } from "matter-js";
import CircleObj from "../gameObjects/CircleObj";
import { defaultBodyStyleRender } from "../gameObjects/PlayerCar/config";
import PlayerCar from "../gameObjects/PlayerCar/PlayerCar";
import { levelGenerator } from "./levelGenerator/levelGenerator";



export function addWorldObjects(){

  const circleObj = new CircleObj(400, 300, 30);
  this.gameObjects.push(circleObj);
  const playerCar = new PlayerCar(50, 200);
  this.gameObjects.push(playerCar);
  const worldComposite = levelGenerator();
  
  Composite.add(this.engine.world, worldComposite);

  this.gameObjects.forEach((obj) => {
    Composite.add(this.engine.world, obj.composite);
  });

  return playerCar;
}