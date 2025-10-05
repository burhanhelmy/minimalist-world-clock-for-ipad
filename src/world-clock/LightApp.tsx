import React from 'react';
import { CountryCode, getCountryColor, getCountryTimeDiff, getTimeZone } from './util';

function LightClockContent({ countryCode }: { countryCode: CountryCode }) {
  return (
    <div className="flex flex-col justify-center align-center items-center p-5 rounded-md bg-white drop-shadow-sm h-full">
      <div className="flex flex-row align-middle items-center">
        <div
          className={`mb-6 text-3xl flex flex-row items-center text-white ${getCountryColor(
            countryCode
          )} rounded-full pl-7 pr-7 pt-2 pb-2`}
        >
          <div className="mr-2">{CountryCode[countryCode]}</div>
          <div>{getCountryTimeDiff(countryCode)}</div>
        </div>
      </div>
      <div className="text-neutral-800 flex flex-row items-end text-8xl font-mono font-bold">
        {' '}
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

function LightApp() {
  return (
    <div className="flex flex-col grow gap-4 place-content-stretch font-bold p-4 h-screen">
      <LightClockContent countryCode={CountryCode.MY} />
      <LightClockContent countryCode={CountryCode.AUS} />
      <LightClockContent countryCode={CountryCode.BRIS} />
    </div>
  );
}

export default LightApp;
