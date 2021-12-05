import { Render } from "matter-js"



export const stopGame = ()=>{
    Render.stop(window.game.render);
}