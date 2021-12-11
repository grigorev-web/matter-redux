import { Body } from "matter-js";


export const defaultBodyOptions = {
    collisionFilter: {
      group: Body.nextGroup(true),
    },
    render: {
        fillStyle: "white",
        strokeStyle: "black",
        lineWidth: 5,
      },
  }