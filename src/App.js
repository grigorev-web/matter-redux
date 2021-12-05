import React from 'react';

//import { Counter } from './features/counter/Counter';
import './App.css';
import AppUI from './ui';
import AppWorld from './world';



function App() {
  
  return (
       <div className="App" >
        <AppUI/>
        <AppWorld />
        {/* <Counter /> */}
        
      
    </div>  
  );
}

export default App;
