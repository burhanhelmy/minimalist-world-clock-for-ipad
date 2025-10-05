import React from 'react';
import { CountryCode, getCountryColor, getCountryTimeDiff, getTimeZone } from './util';

// TODO: dark mode
function DarkClockContent({ countryCode }: { countryCode: CountryCode }) {
  return (
    <div className="flex flex-col justify-center align-center items-center p-5 rounded-md bg-neutral-900 drop-shadow-sm h-full">
      <div className="flex flex-row align-middle items-center">
        <div
          className={`mb-6 text-3xl flex flex-row items-center text-neutral-900 ${getCountryColor(
            countryCode
          )} rounded-full pl-7 pr-7 pt-2 pb-2`}
        >
          <div className="mr-2">{CountryCode[countryCode]}</div>
          <div>{getCountryTimeDiff(countryCode)}</div>
        </div>
      </div>
      <div
        className="text-neutral-100 flex flex-row items-end font-mono"
        style={{ fontSize: 'clamp(2rem, 10vw, 5rem)' }}
      >
        {new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: getTimeZone(countryCode)
        })}
      </div>
    </div>
  );
}

function DarkApp() {
  return (
    <div className="flex flex-col grow gap-4 place-content-stretch font-bold p-4 h-screen">
      <DarkClockContent countryCode={CountryCode.MY} />
      <DarkClockContent countryCode={CountryCode.AUS} />
      <DarkClockContent countryCode={CountryCode.BRIS} />
    </div>
  );
}

export default DarkApp;
