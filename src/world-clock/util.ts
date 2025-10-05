export enum CountryCode {
  MY = 'MY',
  AUS = 'AUS',
  BRIS = 'BRIS'
}

export const getCountryColor = (countryCode: CountryCode) => {
  switch (countryCode) {
    case CountryCode.MY:
      return 'bg-fuchsia-600';
    case CountryCode.AUS:
      return 'bg-sky-600';
    case CountryCode.BRIS:
      return 'bg-yellow-600';
    default:
      return 'bg-gray-600';
  }
};

export const getCountryTimeDiff = (countryCode: CountryCode) => {
  switch (countryCode) {
    case CountryCode.MY:
      return '+ 0H';
    case CountryCode.AUS:
      return '+ 2H/+ 3H (DST)';
    case CountryCode.BRIS:
      return '+ 2H';
    default:
      return 'N/A';
  }
};

export const getTimeZone = (countryCode: CountryCode) => {
  switch (countryCode) {
    case CountryCode.MY:
      return 'Asia/Kuala_Lumpur';
    case CountryCode.AUS:
      return 'Australia/Sydney'; // DST aware
    case CountryCode.BRIS:
      return 'Australia/Brisbane'; // No DST
    default:
      return 'UTC';
  }
};
