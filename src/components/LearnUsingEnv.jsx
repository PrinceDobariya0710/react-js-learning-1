import React from 'react'

const LearnUsingEnv = () => {
  return (
    <div>
        <h1>Learn Env using in Vite +React</h1>
        {import.meta.env.VITE_BASE_API_URL}
        <br />
        {import.meta.env.VITE_BASE_API_KEY}
    </div>
  )
}

export default LearnUsingEnv