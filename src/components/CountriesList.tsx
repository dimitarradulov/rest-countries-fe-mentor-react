import { VirtuosoGrid } from "react-virtuoso";
import { Country } from "../models/country.model";
import CountryCard from "./CountryCard";

type CountriesListProps = { countries: Country[] };

const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <VirtuosoGrid
      data={countries}
      totalCount={countries.length}
      listClassName="grid grid-cols-auto-fill gap-10 md:gap-20"
      itemContent={(_, country) => <CountryCard countryData={country} />}
      style={{ height: "100dvh" }}
    />
  );
};

export default CountriesList;
