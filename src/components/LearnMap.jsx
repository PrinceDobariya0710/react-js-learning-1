import React from 'react'

const LearnMap = () => {
    const items = ["Item1","Item2","Item3","Item4"]
  return (
    <div>
        <hr />
        <h1>Learn Map</h1>
        <ul>
            {items.map((item,i)=>(
                <li key={i}>{i}--{item}</li>
            ))}
        </ul>
        <hr />
    </div>
  )
}

export default LearnMap