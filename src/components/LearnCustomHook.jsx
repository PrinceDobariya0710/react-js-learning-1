import {React,useState} from 'react'
import UseCustomCounter from './hooks/UseCustomCounter'

const LearnCustomHook = () => {
    const {count, handleIncrement} = UseCustomCounter()
  return (
    <div>
        <hr />
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <hr />
    </div>
  )
}

export default LearnCustomHook