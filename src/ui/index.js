import { useDispatch, useSelector } from "react-redux";
import { runGame, stopGame } from "../scene/functions";
import { destroyGame, initGame } from "../scene/initGame";
import { selectRun } from "./UiSlice";
import { toggle } from "./UiSlice";








const AppUI = () => {
    console.log("APP UI")

    const run = useSelector(selectRun)
    const dispatch = useDispatch();
    

    
    function startStop(){
      if(run) stopGame();
      else runGame();
      dispatch(toggle())
    }
      
    function restartFunc(){
      destroyGame(window.game);
      initGame(window.game.scene);
    }
    
  return (
    <div style={{position:'absolute',zIndex:10}}>
      <h2>APP UI</h2>
      <button onClick={startStop}>{run ? 'stop':'run'}</button>
      <button onClick={restartFunc}>restart</button>
    </div>
  );
};

export default AppUI;
