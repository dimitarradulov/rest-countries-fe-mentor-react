import { Country } from "../models/country.model";
import { formatNumberWithCommas, generateUniqueId } from "./general.utils";

export const mapCountries = (countries: any[]): Country[] => {
  return countries.map((countryInfo) => {
    return {
      id: generateUniqueId(),
      flags: {
        png: countryInfo.flags.png,
        svg: countryInfo.flags.svg,
        alt: countryInfo.flags.alt,
      },
      name: countryInfo.name.common,
      population: formatNumberWithCommas(countryInfo.population),
      region: countryInfo.region,
      capital: countryInfo.capital?.at(0),
      currencies: countryInfo.currencies
        ? Object.values(countryInfo.currencies)
            .map((currency: any) => currency.name)
            .join(", ")
        : "",
      languages: countryInfo.languages
        ? Object.values(countryInfo.languages).join(", ")
        : "",
      nativeName: countryInfo.name.nativeName
        ? (Object.values(countryInfo.name.nativeName)[0] as any).common
        : "",
      subRegion: countryInfo.subregion,
      tld: countryInfo.tld?.at(0),
      cca2: countryInfo.cca2,
      cca3: countryInfo.cca3,
      ccn3: countryInfo.ccn3,
      cioc: countryInfo.cioc,
      borders: countryInfo.borders,
    };
  });
};
