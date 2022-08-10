import React, { useState } from 'react';
import { BrowserWindow } from 'electron';
import { getWindow } from '../electron';
function AppBar() {
  const [isMaximize, setMaximize] = useState(false);

  const handleToggle = () => {
    if (isMaximize) {
      setMaximize(false);
    } else {
      setMaximize(true);
    }
    window.Main.Maximize();
  };

  interface BarControlIconProps {
    onClick: Function,
    controlType: ControlType
  }

  enum ControlType {
    close,
    expand,
    minimize
  }

  const getBgColor = (controlType: ControlType) => {
    switch (controlType) {
      case ControlType.close:
        return '#FF3B30'
      case ControlType.expand:
        return '#28CD41'
      case ControlType.minimize:
        return '#FFCC00'
      default:
        return '#8E8E93'
    }
  }


  // new BrowserWindow().on('leave-full-screen',()=>{

  // })
  
  const BarControlIcon = (props: BarControlIconProps) => {
    return <div onClick={() => props.onClick()} className="h-3 w-3 rounded-full ml-1 mr-1" style={{ backgroundColor: getBgColor(props.controlType) }} />
  }
  return (
    <div onDoubleClick={() => handleToggle()} className=" flex flex-row justify-start items-center p-2 draggable">
        <BarControlIcon controlType={ControlType.close} onClick={window.Main.Close} />
        <BarControlIcon controlType={ControlType.minimize} onClick={window.Main.Minimize} />
        <BarControlIcon controlType={ControlType.expand} onClick={() => handleToggle()} />
    </div>
  );
}

export default AppBar;
