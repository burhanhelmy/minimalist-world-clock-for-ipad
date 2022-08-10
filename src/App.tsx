import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import { DarkApp } from './world-clock/DarkApp';
import { LightApp } from './world-clock/LightApp';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [currentTime, setCurrentTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className='flex flex-col h-screen select-none' style={{backgroundColor: darkMode ? '#171717': '#F5F5F5'}} >
    <AppBar />
    <div className='flex flex-col h-screen'  onClick={() => setDarkMode((_) => !_)}> {darkMode ? <DarkApp /> : <LightApp />}</div>;
  </div>
}

export default App;
