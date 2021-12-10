import { Bodies, Composite, Constraint } from "matter-js";
import GameObj from "./GameObj"



class CircleObj extends GameObj{
    
    constructor(x,y,radius){
        super("circle",x,y);
        console.log("CIRCLE CONSTRUCTOR")
        
        const wheelA = Bodies.circle(this.centerX, this.centerY - 190, radius, {
            collisionFilter: { group: -1 },
            render: this.defaultBodyStyleRender,
          });
          this.setCenterBody(wheelA);
        //this.bodies.push(wheelA);
        Composite.add(this.composite,wheelA);

        const wheelB = Bodies.circle(this.centerX + 100, this.centerY, radius, {
        collisionFilter: { group: -1 },
        render: this.defaultBodyStyleRender,
        });
        //this.bodies.push(wheelB);
        Composite.add(this.composite,wheelB);

        const axel = Constraint.create({
            bodyB: wheelB,
           // pointB: { x: this.centerX + 100, y: this.centerY },
            bodyA: wheelA,
            stiffness: 0.001,
            length: 100
        });
        Composite.add(this.composite,axel);

    }

    getSquare(){
        return this.x * this.y;
    }
    static isCircle(){
        console.log("CircleObj isCircle()");
    }
    
}

export default CircleObj;


