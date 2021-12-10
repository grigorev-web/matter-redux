import { Bodies, Body, Composite } from "matter-js";
import _ from 'lodash';




class GameObj {

  defaultBodyStyleRender = {
    fillStyle: "white",
    strokeStyle: "black",
    lineWidth: 5,
  };

  constructor(name, x, y) {
    this.centerX = x;
    this.centerY = y;
    this.collisionGroup = Body.nextGroup(true);
    this.bodyOptions = {
      collisionFilter: {
        group: this.collisionGroup,
      },
      render: this.defaultBodyStyleRender,
    }
    this.name = name + new Date().toTimeString();
    
    this.composite = Composite.create({label:this.name});
    this.events = {};
    
  }
  create() {
    return this.composite;
  }
  reset(){
    
  }
  clear() {
    
    Object.entries(this.events).map( function ([type, func]) {
        document.body.removeEventListener(type, func);
      })
      this.composite = null;
  }
  setCenterBody(body){
    this.centerBody = body;
  }
  getCenterBody(){
    return this.centerBody;
  }
}
export default GameObj;
