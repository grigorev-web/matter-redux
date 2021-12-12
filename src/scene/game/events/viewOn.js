import { Events, Render } from "matter-js";

export function viewOn(obj){
    Events.on(this.render, "beforeRender", () => {
      //console.log(obj)
      const speed = obj.centerBody.velocity.x;


      let xOffset = 0;
      if(Math.abs(speed) > 5)
      xOffset = speed * 50;

      let xOffsetAcc = speed * 15
  
      
        Render.lookAt(this.render, {
          x:obj.getCenterBody().bounds.max.x + xOffsetAcc,
          y:obj.getCenterBody().bounds.min.y,
        }, {
          x: this.viewport.x + Math.abs(xOffset), 
          y: this.viewport.y, 
        });
      });
    
}