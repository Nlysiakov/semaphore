import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';


function App() {

  const refGreen=useRef<HTMLDivElement | null>(null)
  const refOrange=useRef<HTMLDivElement | null>(null)
  const refRed=useRef<HTMLDivElement | null>(null)


  const [activeColor, setActiveColor]=useState<"red" | "orange" | "green">("red")
  const [enterState, setEnterState]=useState(false)


  const handleCircleFocus=(color:"red" | "orange" | "green")=>{
    setActiveColor(color)
  }
    
    const handleKeySwap=(e:KeyboardEvent)=>{
      if(e.key==="tab" || e.key==="Tab"){
        setEnterState(false)
      }
       if (e.key === "enter" || e.key === "Enter") {
        setEnterState(true)
        e.preventDefault()
    }
    }
    
    
    useEffect(() => {
      window.addEventListener('keydown', handleKeySwap)
      return () => window.removeEventListener('keydown', handleKeySwap)
  }, [handleKeySwap])

  useEffect(()=>{
    if(refRed.current){
      refRed.current.focus()
    }
  },[])

    

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
          ref={refRed}
          color="red" 
          active={activeColor==="red"}
          enterActive={enterState && activeColor==="red"}
          onFocus={()=>handleCircleFocus("red")}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          ref={refOrange}
          color="orange"
          active={activeColor==="orange"}
          enterActive={enterState && activeColor==="orange"} 
          onFocus={()=>{handleCircleFocus("orange")}}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          ref={refGreen}
          color="green"
          active={activeColor==="green"}
          enterActive={enterState && activeColor==="green"}
          onFocus={()=>handleCircleFocus("green")}
        />
      </div>
    </div>
  );
}
export default App;
