import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

const useCountriesContext = () => {
  const countriesData = useContext(CountriesContext);

  if (!countriesData) {
    throw new Error(
      "useCountriesContext must be used within a CountriesProvider"
    );
  }

  return countriesData;
};

export default useCountriesContext;
