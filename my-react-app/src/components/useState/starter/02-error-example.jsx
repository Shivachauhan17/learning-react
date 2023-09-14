import React,{useState} from 'react'

function UseStateBasics() {
    const [count,setCount]=useState(0);

    const handleClick=()=>{
        setCount(count+1);
    }

    return (
        <div>
            
    <h4>{count}</h4>
    <button type="button" onClick={handleClick}>increment</button>
        
    </div>
  )
}

export default UseStateBasics;