import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate("/register")}>Register</button>
        <button onClick={()=>navigate("/login")}>Login</button>
    </div>
  )
}

export default Homepage