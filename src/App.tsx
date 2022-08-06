import { useEffect, useState } from 'react'
import { DarkApp } from './DarkApp'
import { LightApp } from './LightApp'

const App = () => {
  const [currentTime, setCurrentTime] = useState(Date.now())
  useEffect(() => {
      const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
      return () => {
          clearInterval(interval)
      }
  }, [])
  const [darkMode, setDarkMode] = useState(false)
  return <div onClick={() => setDarkMode(darkMode => !darkMode)}> {darkMode ? <DarkApp /> : <LightApp />}</div>
}

export default App
