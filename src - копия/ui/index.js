
import { useDispatch, useSelector } from "react-redux";
import Game from "../scene/Game";
import { selectRun } from "./UiSlice";
import { start,toggle } from "./UiSlice";








const AppUI = () => {
    console.log("APP UI")

    const run = useSelector(selectRun)
    const dispatch = useDispatch();
    

    
    function startStop(){
      if(run) Game.stop();
      else Game.start();
      dispatch(toggle())
    }
      
    function restartFunc(){
      Game.restart();
      dispatch(start());
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
