import { useEffect, useRef } from "react";
import { Engine, Render, Runner, Bodies, Composite,World } from "matter-js";
import { store } from "../app/store";
import { stopGame } from "./functions";

const AppWorld = () => {
  console.log("APP WORLD RE RENDER");

  const scene = useRef();
  const engine = useRef(Engine.create());
  
  let Game = {};
  window.game = Game;

  useEffect(()=>{
    Game.render = Render.create({
      element: scene.current,
      engine: engine.current,
      options:{
          width: document.body.clientWidth,
          height: document.body.clientHeight,
          wireframes: false,
          background: 'transparent'
      }
    });


    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const boxB = Bodies.rectangle(450, 50, 80, 80);
    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    Composite.add(engine.current.world, [boxA, boxB, ground]);

    Render.run(Game.render);
    Game.runner = Runner.create();
    Runner.run(Game.runner, engine.current);

    

    return () => {
      Render.stop(Game.render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      Game.render.canvas.remove()
      Game.render.canvas = null
      Game.render.context = null
      Game.render.textures = {}
    }
  },[]);
  
  function clickHandler(){
    Composite.add(engine.current.world, [Bodies.rectangle(400, 200, 80, 80)])
  }

  setTimeout(()=>{
    stopGame()
    console.log("stop")
  },1200)


  return <div ref={scene} style={{position:'absolute'}}></div>
};

export default AppWorld;

