import { Bodies } from "matter-js";
import { defaultBodyStyleRender } from "../../gameObjects/PlayerCar/config";
import { addCreature } from "./addCreature";

export function levelGenerator() {
  const levelWidth = 80000;
  let levelOffset = -500;
  let objects = [];
  let prev = { x: -500, y: 600 };
  let prevAngle = 0;
  const maxAngle = 1;

  while (levelOffset < levelWidth) {
    let width = 200;
    let height = 100;
    levelOffset += width;
    
    

    let angle = prevAngle + (Math.random() - 0.5) / 10;
    if (angle > 0.8) angle -= 0.1;
    if (angle < -0.8) angle += 0.1;
    let x = prev.x + width - angle * prevAngle * 100;
    let y = prev.y + angle * 100 + prevAngle * 100;


    const zombie = addCreature(x,y)
    if(zombie) objects.push(zombie)


    let block = Bodies.rectangle(x, y, width, height, {
      isStatic: true,
      angle,
      chamfer: 1,
      render: {
        fillStyle: "lightgray",
        strokeStyle: "red",
        lineWidth: 1,
        sprite: {
          texture: "/sprites/ground/grass1.png",
          yScale: 3.5,
          xScale: 2.5,
          yOffset: 0.07,
        },
      },
    });
    prev = { x, y };
    prevAngle = angle;
    //console.log(block);
    objects.push(block);
  }

  const ground1 = Bodies.rectangle(400, 610, 5000, 60, {
    isStatic: true,
    //friction: 1,
    render: defaultBodyStyleRender,
  });
  //objects.push(ground1);

  const ground2 = Bodies.rectangle(5100, -210, 5000, 60, {
    isStatic: true,
    //friction: 1,
    angle: -0.39,
    render: defaultBodyStyleRender,
  });
  //objects.push(ground2);

  const block = Bodies.rectangle(14000, 150, 150, 60, {
    isStatic: true,
    angle: -1.57,
    render: { fillStyle: "white", strokeStyle: "black", lineWidth: 1 },
  });
  objects.push(block);

  const block2 = Bodies.rectangle(-400, 350, 150, 60, {
    //isStatic:true,
    //angle:-3.141,
    render: { fillStyle: "white", strokeStyle: "black", lineWidth: 1 },
  });
  objects.push(block2);

  return objects;
}
