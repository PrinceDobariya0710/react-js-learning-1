import React, { useState } from 'react'

const CounterApp = () => {
    const [count,setCount] = useState(0)
    const changeCount = () =>{
            setCount(count+1)}
    const resetCount = () =>{
            setCount(0)
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={changeCount}>Increase Count</button>
        <button onClick={resetCount}> Reset Count</button>
    </div>
  )
}

export default CounterApp