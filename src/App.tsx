import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';



function App() {
  const [circleState, setCircleState] = useState({
    red: {
      status: true,
      active: true
    },
    orange: {
      status: false,
      active: false
    },
    green: {
      status: false,
      active: false
    }
  });

  
  const changeCircle = () => {
    if (circleState.red.status) {
      setCircleState({
        red: { status: false, active: false },
        orange: { status: true, active: false },
        green: { status: false, active: false }
      });
    } else if (circleState.orange.status) {
      setCircleState({
        red: { status: false, active: false },
        orange: { status: false, active: false },
        green: { status: true, active: false }
      });
    } else if (circleState.green.status) {
      setCircleState({
        red: { status: true, active: false },
        orange: { status: false, active: false },
        green: { status: false, active: false }
      });
    }
  };

  
  const activateCircle = () => {
    setCircleState(prev => {
      if (prev.red.status) {
        return {
          ...prev,
          red: { ...prev.red, active: true }
        };
      } else if (prev.orange.status) {
        return {
          ...prev,
          orange: { ...prev.orange, active: true }
        };
      } else if (prev.green.status) {
        return {
          ...prev,
          green: { ...prev.green, active: true }
        };
      }
      return prev;
    });
  };

  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Tab") {
        event.preventDefault();
        changeCircle();
      }
      if (event.code === "Enter") {
        event.preventDefault();
        activateCircle(); 
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [circleState]);

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle 
          color="red" 
          active={circleState.red.status}
          enterActive={circleState.red.active}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          color="orange" 
          active={circleState.orange.status}
          enterActive={circleState.orange.active}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          color="green" 
          active={circleState.green.status}
          enterActive={circleState.green.active}
        />
      </div>
    </div>
  );
}
export default App;
