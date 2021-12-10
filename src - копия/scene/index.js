import { useEffect, useRef } from "react";
import Game from "./Game";

const AppScene = () => {
  console.log("APP WORLD RE RENDER");
  const scene = useRef();

  useEffect(() => {
    Game.init(scene);
    return () => {
      Game.destroy();
    };
  }, []);

  return <div className="scene" ref={scene}></div>;
};

export default AppScene;
