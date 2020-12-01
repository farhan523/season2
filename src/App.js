import React, {useState} from 'react'
import './App.css';

function App(){
  let[count, setCount] = useState(0)
  let[isMorning,setMorning] = useState(true)
  return(
    <div className={`box ${isMorning ? 'daylight':''}`}>
      <h1>time is {isMorning ? 'Morning':'night'}</h1>
      <h1>the value of counter variable is {count}</h1>
      <button onClick={
        ()=> setCount(count + 1)
      } >Update counter</button>
        <button onClick={()=>setMorning(!isMorning)}>change time</button>
    </div>
  )
}

export default App;
