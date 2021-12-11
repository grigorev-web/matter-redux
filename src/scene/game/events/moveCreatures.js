import { Events} from "matter-js";

export function moveCreatures(){
    Events.on(this.engine, "beforeUpdate", () => {
        this.gameObjects.forEach(obj=>{
          if(obj.isCreature) obj.move();
        });
      });
    
}