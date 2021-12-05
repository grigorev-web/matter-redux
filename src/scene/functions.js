import { Engine, Runner } from "matter-js"



export const stopGame = ()=>{
    console.log('stop')
    window.game.runner.enabled = false;

}

export const runGame = ()=>{
    console.log('run')
    window.game.runner.enabled = true;
}