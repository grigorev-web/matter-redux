import { useEffect, useRef } from "react";
import { destroyGame, initGame } from "./initGame";

const AppScene = () => {
  console.log("APP WORLD RE RENDER");
  const scene = useRef();

  useEffect(() => {
    const game = initGame(scene);
    return () => {
      destroyGame(game);
    };
  }, []);

  return <div className="scene" ref={scene}></div>;
};

export default AppScene;
