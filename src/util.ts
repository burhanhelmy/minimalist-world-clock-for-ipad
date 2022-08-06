export enum CountryCode {
    MY = "MY",
    AUS = "AUS",
    ID = "ID",
    PH = "PH",
}

export const getCountryColor = (countryCode: CountryCode) => {
    switch (countryCode) {
        case (CountryCode.MY):
            return "bg-fuchsia-600"
        case (CountryCode.AUS):
            return "bg-sky-600"
        case (CountryCode.ID):
            return "bg-lime-600"
        case (CountryCode.PH):
            return "bg-orange-600"
        default:
            break;
    }
}

export const getCountryTimeDiff = (countryCode: CountryCode) => {
    switch (countryCode) {
        case (CountryCode.MY):
            return "+ 0H"
        case (CountryCode.AUS):
            return "+ 2H"
        case (CountryCode.ID):
            return "- 1H"
        case (CountryCode.PH):
            return "+ 0H"
        default:
            break;
    }
}

export const getTimeZone = (countryCode: CountryCode) => {
    switch (countryCode) {
        case (CountryCode.MY):
            return 'Asia/Kuala_Lumpur'
        case (CountryCode.AUS):
            return 'Australia/Sydney'
        case (CountryCode.ID):
            return "Asia/Jakarta"
        case (CountryCode.PH):
            return 'Asia/Manila'
        default:
            break;
    }
}