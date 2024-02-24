import React from 'react'

const LearnJSX = () => {
    let model = "this is variable"
  return (
    <>
    {/* React.createElement("h1",none,"LearnJSX") */}
       <h1>Learn JSX</h1> 
       {/* Javascript Expression in JSX */}
       <h1>Price : {1+5}</h1>
       <h1>variable  : {model}</h1>

       {/* Attribute in JSX */}
       <h1 className='bg-primary'> Learn JSX class</h1>
       <h1 className={model}> Learn JSX model vaariable class</h1>
    </>
  )
}

export default LearnJSX