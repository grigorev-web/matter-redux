import React from 'react';

//import { Counter } from './features/counter/Counter';
import './App.css';
import AppUI from './ui';
import AppScene from './scene';



function App() {
  
  return (
       <div className="App" >
        <AppUI/>
        <AppScene />
        {/* <Counter /> */}
        
      
    </div>  
  );
}

export default App;
