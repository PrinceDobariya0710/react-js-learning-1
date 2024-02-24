import React, { useEffect, useMemo, useState } from 'react'

const LearnMemo = () => {
    const [count,setCount] = useState(0)
    const changeCount = () =>{
            setCount(count+1)}
    const resetCount = () =>{
            setCount(0)
    }

    const [randomNumber,setRandomNumber] = useState(null);
    const generateRandNum = () =>{
        const newRanNum = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRanNum)
    }

    // const isCountTen = () => {
    //     console.log("isCountTen Called")
    //     if(count === 10){
    //         return "Yes"
    //     }
    //     return "No"
    // }
    const isCountTen = useMemo(()=>{
        console.log("isCountTen Called")
        if(count === 10){
            return "Yes"
        }
        return "No"
    },[count])
  return (
    <div>
        <h1>Learn UseMemo</h1>
       <h1>Count : {count} equal to 10 ? --- {isCountTen}</h1>
        <button onClick={changeCount}>Increase Count</button>
        <hr />
        <h2>Random Number : {randomNumber}</h2>
        <button onClick={generateRandNum}>Generate Random</button> 
    </div>
  )
}

export default LearnMemo