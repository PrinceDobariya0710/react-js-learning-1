import {React,useState} from 'react'

const LearnConditionalRender = () => {
  const status = true
  const [isLogin, setIsLogin] = useState(false)
  const handleLogin = () =>{
    setIsLogin(true);
  }
  const handleLogout = () =>{
    setIsLogin(false);
  }
  return (
    <div>
      <hr />
      {status && <h1>Prince</h1>}
      {isLogin ? (<><h1>Dashboard Page</h1> <button onClick={handleLogout}>Logout</button></>) : (<><h1>Login Page</h1><button onClick={handleLogin}>Login</button></>)}
      
      
      <hr />
    </div>
  )
}

export default LearnConditionalRender