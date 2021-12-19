import { Bodies } from "matter-js";
import Zombie from "../../gameObjects/Zombie/Zombie";




export function addCreature(x,y){

    if(Math.random() > 0.6){
        const zombie = new Zombie(x,y);
        return zombie.composite;
    } else return false;
    
}