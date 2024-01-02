import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import Dashboard from './components/Dashboard'
import PrivateRoute from './protectedRoute/PrivateRoute'

function App() {
  return (
     <>
     <Navbar/>
       <Routes> 
          <Route path='/' element={<Homepage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
       </Routes>
     </>
  )
}

export default App
