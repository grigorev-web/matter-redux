import { useDispatch, useSelector } from "react-redux";
import { selectRun } from "./UiSlice";
import { toggle } from "./UiSlice";








const AppUI = () => {
    console.log("APP UI")

    const run = useSelector(selectRun)
    const dispatch = useDispatch();
  return (
    <div style={{position:'absolute',zIndex:10}}>
      <h2>APP UI</h2>
      <button onClick={()=>dispatch(toggle())}>{run ? 'stop':'start'}</button>
    </div>
  );
};

export default AppUI;
