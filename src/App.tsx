import React, { useEffect, useState } from 'react';
import DarkApp from './world-clock/DarkApp';
import LightApp from './world-clock/LightApp';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [currentTime, setCurrentTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: darkMode ? '#1A1A1A' : '#F5F5F5' }}
      onClick={() => setDarkMode((_) => !_)}
    >
      {' '}
      {darkMode ? <DarkApp /> : <LightApp />}
    </div>
  );
}

export default App;
