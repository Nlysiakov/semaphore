import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';


function App() {

  // const ref=useRef<HTMLDivElement | null>(null)
  const [activeColor, setActiveColor]=useState<colors>("red")


  type colors = "red" | "orange" | "green"

    

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
          // ref={ref}
          color="red" 
          // active={activeColor==="red"}
          onFocus={()=>setActiveColor("red")}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          // ref={ref}
          color="orange"
          // active={activeColor==="orange"}
         onFocus={()=>setActiveColor("orange")}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          // ref={ref}
          color="green"
          // active={activeColor==="green"}
          onFocus={()=>setActiveColor("green")}
        />
      </div>
    </div>
  );
}
export default App;
