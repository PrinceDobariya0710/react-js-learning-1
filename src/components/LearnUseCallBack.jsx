import React, { useCallback, useState } from 'react'
import { GenerateRandomNumber } from './GenerateRandomNumber'

const LearnUseCallBack = () => {
  const [count,setCount] = useState(0)
  const handleIncreaseCount = () => {
    setCount((prevCount)=> prevCount +1)
  }
  const [randomNumber,setRandomNumber] = useState(0);
  const generateRandomNumber = useCallback(()=>{
    const newRanNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRanNum)
  },[randomNumber])
  return (
    <div>
      <GenerateRandomNumber randomNumber={randomNumber} generateRandomNumber={generateRandomNumber} />
      <h1>Count : {count}</h1>
      <button onClick={handleIncreaseCount}>Increase Count</button>
    </div>
  )
}

export default LearnUseCallBack