import { Country } from "../models/country.model";

type CountryBordersProps = {
  countries: Country[];
};

const CountryBorders = ({ countries }: CountryBordersProps) => {
  return (
    <>
      {countries.map((country) => (
        <span key={country.id} className="card-base px-4 py-1 mr-2">
          {country.name}
        </span>
      ))}
    </>
  );
};

export default CountryBorders;
