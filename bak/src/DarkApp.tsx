import { useState } from "react"
import { CountryCode, getCountryColor, getCountryTimeDiff, getTimeZone } from "./util"

// TODO: dark mode
const DarkClockContent = (props: { countryCode: CountryCode }) =>
    <div className='flex flex-col justify-center align-start p-10 rounded-md bg-black drop-shadow-sm'>
        <div className="flex flex-row align-middle items-center">
            <div className={`mb-4 text-3xl flex flex-row items-center  text-black ${getCountryColor(props.countryCode)} rounded-full pl-4 pr-4 pt-1 pb-1`}>
                <div className='mr-2'>{CountryCode[props.countryCode]}</div>
                <div>{getCountryTimeDiff(props.countryCode)}</div>
            </div>
        </div>
        <div className='text-slate-700 flex flex-row items-end text-9xl'> {(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: getTimeZone(props.countryCode) }))}</div>
    </div>


export const DarkApp = () => {
    return (
        <div className="grid grid-cols-2 gap-4 place-content-stretch h-screen bg-gray-900 font-bold p-4">
            <DarkClockContent countryCode={CountryCode.MY} />
            <DarkClockContent countryCode={CountryCode.AUS} />
            <DarkClockContent countryCode={CountryCode.PH} />
            <DarkClockContent countryCode={CountryCode.ID} />
        </div>
    )
}