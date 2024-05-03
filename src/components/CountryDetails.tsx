import { Country } from "../models/country.model";
import CountryBorders from "./CountryBorders";
import CountryField from "./CountryField";

type CountryDetailsProps = {
  country: Country;
  borderCountries: Country[];
};

const CountryDetails = ({ country, borderCountries }: CountryDetailsProps) => {
  return (
    <div className="md:flex justify-between items-center">
      <img srcSet={country.flags.svg} className="mb-10 md:mb-0 md:w-[40%]" />
      <div className="md:w-[50%] md:text-base">
        <h2 className="text-3xl font-black">{country.name}</h2>
        <div className="md:flex justify-between flex-wrap my-10">
          <div className="grid gap-2">
            <CountryField label="Native Name" value={country.nativeName} />
            <CountryField label="Population" value={country.population} />
            <CountryField label="Region" value={country.region} />
            <CountryField label="Sub Region" value={country.subRegion} />
            <CountryField label="Capital" value={country.capital} />
          </div>

          <div className="[&>*:not(:last-child)]:mb-2 my-8 md:m-0">
            <CountryField label="Top Level Domain" value={country.tld} />
            <CountryField label="Currencies" value={country.currencies} />
            <CountryField label="Languages" value={country.languages} />
          </div>
        </div>
        <CountryField
          className="flex flex-wrap gap-2"
          label="Border Countries"
          value={
            borderCountries.length ? (
              <CountryBorders countries={borderCountries} />
            ) : (
              "No Border Countries"
            )
          }
        />
      </div>
    </div>
  );
};

export default CountryDetails;
