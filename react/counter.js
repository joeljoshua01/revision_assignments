import {useState} from 'react';
import "./styles.css";

const Counter = (props) => {
  const [count,setCount] = useState(props.initialCount);

  function handleIncr(){
    setCount(count=>count+1)
  }

    function handleDecr(){
    setCount(count=>count-1)
  }

  function reset(){
    setCount(props.initialCount)
  }


  return(
    <>
     <button onClick={handleIncr} >Increment</button>
     <button onClick={handleDecr} >Decrement </button>
     <h2>Count: {count}</h2>
     <button onClick={reset}>Reset </button>
    </>
  )
}

Counter.defaultProps = {
  initialCount:0
}

export default function App() {
  return (
    <div className="App">
    <Counter initialCount={100}/>
    </div>
  );
}