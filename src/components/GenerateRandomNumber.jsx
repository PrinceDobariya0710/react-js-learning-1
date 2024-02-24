import {React,useMemo, memo} from 'react'

export const GenerateRandomNumber = memo(({randomNumber,generateRandomNumber}) => {
  console.log("Generate Random Number Component Rendered")
  return (
    <>
      <h2>Random Number : {randomNumber}</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
})