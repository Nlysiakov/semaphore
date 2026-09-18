import { useState} from 'react';
import './App.css';
import { Circle } from './Circle/Circle';


function App() {

  type colors = "red" | "orange" | "green"
  const [activeColor, setActiveColor]=useState<colors>("red")


  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
          color="red" 
          isActive={activeColor==="red"}
          onFocus={setActiveColor}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          color="orange"
          isActive={activeColor==="orange"}
          onFocus={setActiveColor}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          color="green"
          isActive={activeColor==="green"}
          onFocus={ setActiveColor}
        />
      </div>
    </div>
  );
}
export default App;
