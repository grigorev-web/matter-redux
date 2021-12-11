import { Events, Render } from "matter-js";

export function viewOn(obj){
    Events.on(this.render, "beforeRender", () => {
        Render.lookAt(this.render, obj.getCenterBody(), {
          x: this.viewport.x + this.viewport.xOffset, 
          y: this.viewport.y + this.viewport.yOffset, 
        });
      });
    
}