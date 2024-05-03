import { PropsWithChildren, createContext } from "react";

import { CountriesContextType } from "../models/country.model";
import useFetchCountries from "../hooks/useFetchCountries";

export const CountriesContext = createContext<CountriesContextType | null>(
  null
);

export const CountriesProvider = ({ children }: PropsWithChildren) => {
  const { countries, loading, error } = useFetchCountries();

  return (
    <CountriesContext.Provider value={{ countries, loading, error }}>
      {children}
    </CountriesContext.Provider>
  );
};
