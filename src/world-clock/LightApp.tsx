import React from "react"
import { CountryCode, getCountryColor, getCountryTimeDiff, getTimeZone } from "./util"

const LightClockContent = (props: { countryCode: CountryCode }) =>
    <div className='flex flex-col justify-center align-start p-5 rounded-md bg-white drop-shadow-sm'>
        <div className="flex flex-row align-middle items-center">
            <div className={`mb-2 text-3xl flex flex-row items-center  text-white ${getCountryColor(props.countryCode)} rounded-full pl-4 pr-4 pt-1 pb-1`}>
                <div className='mr-2'>{CountryCode[props.countryCode]}</div>
                <div>{getCountryTimeDiff(props.countryCode)}</div>
            </div>
        </div>
        <div className='flex flex-row items-end text-9xl'> {(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: getTimeZone(props.countryCode) }))}</div>
    </div>

export const LightApp = () => {
    return (
        <div className="grid grid-cols-2 grow gap-4 place-content-stretch font-bold p-4">
            <LightClockContent countryCode={CountryCode.MY} />
            <LightClockContent countryCode={CountryCode.AUS} />
            <LightClockContent countryCode={CountryCode.PH} />
            <LightClockContent countryCode={CountryCode.ID} />
        </div>
    )
}