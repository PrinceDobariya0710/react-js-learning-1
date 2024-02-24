import {React,useState} from 'react'

const UseCustomCounter = () => {
  const [count,setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count +1)
  }
  return { count, handleIncrement}
}

export default UseCustomCounter