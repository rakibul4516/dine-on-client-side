import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import ThemeContext from "./Contexts/ThemeContext"
import Navbar from "./Components/Navbar"

function App() {
  //dark theme code 
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
  }, [])
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null} h-full`} >
          <Navbar/>
          <Outlet/>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
