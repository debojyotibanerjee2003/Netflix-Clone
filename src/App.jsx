import React, { useEffect } from 'react'
import Home from './pages/Home/Home.jsx'
import { Routes ,Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
const App = () => {

  useEffect(()=>{
    onAuthStateChanged(auth,async ()=>{
      if(user){
        console.log("Logged In");
      }else{
        console.log("Logged Out!");
      }
    })
  },[])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/player/:id" element={<Player/>} />
      </Routes>
    </div>
  )
}

export default App
