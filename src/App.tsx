import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';


function App() {

  const refGreen=useRef<HTMLDivElement | null>(null)
  const refOrange=useRef<HTMLDivElement | null>(null)
  const refRed=useRef<HTMLDivElement | null>(null)


  const [activeColor, setActiveColor]=useState<"red" | "orange" | "green">("red")

  useEffect(() => {
    if (refRed.current) {
        refRed.current.style.width = '110px';
        refRed.current.style.height = '110px';
        refRed.current.focus();
    }
}, []);

  
  const circleState=(ref: React.RefObject<HTMLDivElement>, value:number)=>{
    if(ref.current){
      ref.current.style.width=`${value}px`
      ref.current.style.height=`${value}px`
    }
  }
  
  // const circleFocus=(ref: React.RefObject<HTMLDivElement>)=>{
  //   if(ref.current){
  //     ref.current.focus()
  //   }
  // }
  
  const handleSwapCircle=()=>{
    
    circleState(refRed, 100)
    circleState(refOrange, 100)
    circleState(refGreen, 100)

    let nextColor: "red" | "orange" | "green"="red"
    
    if(activeColor === "red"){
      circleState(refRed, 110)
      nextColor="orange"
    }else if(activeColor === "orange"){
      circleState(refOrange, 110)
      nextColor="green"
    }else{
      circleState(refGreen, 110)
      nextColor="red"
    }
    setActiveColor(nextColor)
    }
    
    
    
    const handleKeySwap=(e:KeyboardEvent)=>{
      if(e.key==="tab" || e.key==="Tab"){
        e.preventDefault()
        handleSwapCircle()
      }
       if (e.key === "enter" || e.key === "Enter") {
        e.preventDefault()
    }
    }
    
    
    useEffect(() => {
      window.addEventListener('keydown', handleKeySwap)
      return () => window.removeEventListener('keydown', handleKeySwap)
  }, [handleKeySwap])

    

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
          ref={refRed}
          color="red" 
          active={activeColor==="red"}
          enterActive={activeColor==="red"}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          ref={refOrange}
          color="orange"
          active={activeColor==="orange"}
          enterActive={activeColor==="orange"} 
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          ref={refGreen}
          color="green"
          active={activeColor==="green"}
          enterActive={activeColor==="green"}
        />
      </div>
    </div>
  );
}
export default App;
