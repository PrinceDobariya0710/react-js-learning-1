import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
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

    // useEffect(()=>{
    //     console.log("useEffect Called")
    // })
    // useEffect(()=>{
    //     console.log("useEffect Called")
    // },[])
    // useEffect(()=>{
    //     console.log("useEffect count Called")
    // },[count])
    useEffect(()=>{
        console.log("useEffect random Called")
    },[randomNumber])

    useEffect(()=>{
        console.log("useEffect random Called")
        return ()=>{
            console.log("Component will unmount")
        }
    },[count])
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={changeCount}>Increase Count</button>
        <hr />
        <h2>Random Number : {randomNumber}</h2>
        <button onClick={generateRandNum}>Generate Random</button>
    </div>
  )
}

export default LearnUseEffect