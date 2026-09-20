import { useState, useRef, useEffect} from 'react';
import './App.css';
import { Circle } from './Circle/Circle';
import { Tcolor } from './models/types';


function App() {

  const [activeColor, setActiveColor]=useState<Tcolor>("red")
  const ref=useRef<HTMLDivElement>(null)

  useEffect(()=>{
    ref.current?.focus()
  },[])


  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
          ref={ref}
          color="red" 
          isActive={activeColor==="red"}
          onSelect={setActiveColor}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          color="orange"
          isActive={activeColor==="orange"}
          onSelect={setActiveColor}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          color="green"
          isActive={activeColor==="green"}
          onSelect={ setActiveColor}
        />
      </div>
    </div>
  );
}
export default App;
