import React from 'react'

const LearnEvent = () => {
  const handleClick1 = (e) => {
    e.preventDefault();
    console.log("Event 1 fired")
  }
  const handleClick2 = (id) => {
    console.log("Button 2 pressed",id)
  }
  return (
    <>
    {/* Without Argument */}
    <button onClick={handleClick1}>Click 1</button>
    {/* With Argument */}
    <button onClick={(e) =>handleClick2("myid")}>Click 2</button>
    </>
  )
}

export default LearnEvent