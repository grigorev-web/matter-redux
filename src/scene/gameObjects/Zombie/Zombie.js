import { Bodies, Body, Composite, Constraint } from "matter-js";
import GameObj from "../prototype/GameObj";

class Zombie extends GameObj {
  bodyOptions = {
    collisionFilter: {
      group: Body.nextGroup(true),
    },
    //isStatic:true,
    //angle:-1.67,
    render: { fillStyle: "green", strokeStyle: "black", lineWidth: 1 },
  };

  constructor(x, y) {
    super("Zombie", x, y - 160);

    const block2 = Bodies.rectangle(
      this.centerX,
      this.centerY,
      60,
      160,
      this.bodyOptions
    );
    this.setCenterBody(block2);
    //Composite.add(this.composite, block2);

    const head = Bodies.circle(
      this.centerX,
      this.centerY - 110,
      30,
      this.bodyOptions
    );

    //Composite.add(this.composite, head);

    const axelNeck1 = Constraint.create({
      bodyB: this.getCenterBody(),
      bodyA: head,
    });
    Composite.add(this.composite, [block2, head, axelNeck1]);
  }

  move() {}
}

export default Zombie;
