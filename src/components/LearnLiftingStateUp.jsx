import React from 'react'

const LearnLiftingStateUp = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        let data = "I am data from child component"
        props.myClick(data);
    }
  return (
    <>
        <button onClick={handleClick}>Click Even Lifting</button>
    </>
  )
}

export default LearnLiftingStateUp