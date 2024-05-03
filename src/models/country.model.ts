export type Country = {
  id: string;
  flags: CountryFlag;
  name: string;
  population: number | string;
  region: string;
  capital: string;
  nativeName: string;
  subRegion: string;
  tld: string;
  currencies: string;
  languages: string;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  borders: string[];
};

export type CountryFlag = {
  png: string;
  svg: string;
  alt: string;
};

export type CountriesContextType = {
  countries: Country[];
  loading: boolean;
  error: string | null;
};

export enum Region {
  ALL = "all",
  AFRICA = "africa",
  AMERICA = "americas",
  ASIA = "asia",
  EUROPE = "europe",
  OCEANIA = "oceania",
}
