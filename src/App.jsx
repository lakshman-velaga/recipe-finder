import React, { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

const App = () => {

  const [darkMode,SetDarkMode]=useState(false)

  const[resetHome,setResetHome]=useState(false)

  
  const toggleDarkMode = ()=>{

    const newMode = !darkMode
    SetDarkMode(newMode)
    document.body.classList.toggle("dark",newMode)
  }

  const handleHomeClick = () => {
    setResetHome((prev) => !prev)
  }
  return (
    <div>
      <Navbar 
      toggleDarkMode={toggleDarkMode} 
      darkMode={darkMode} 
      onHomeClick={handleHomeClick}/>
      <Home resetHome={resetHome}/>
    </div>
  )
}

export default App
