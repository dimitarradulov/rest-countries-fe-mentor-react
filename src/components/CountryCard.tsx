import { Link } from "react-router-dom";
import { Country } from "../models/country.model";
import CountryField from "./CountryField";

type CountryCardProps = {
  countryData: Country;
};

const CountryCard = ({ countryData }: CountryCardProps) => {
  const linkTo = `/country/${countryData.cca2}`;

  return (
    <Link to={linkTo}>
      <article className="card-base cursor-pointer w-full">
        <img
          className="inline-block w-full h-36"
          srcSet={countryData.flags.png}
          alt={countryData.flags.alt}
        />
        <div className="px-4 pt-4 pb-8">
          <h3 className="font-extrabold mb-4">{countryData.name}</h3>
          <CountryField label="Population" value={countryData.population} />
          <CountryField label="Region" value={countryData.region} />
          <CountryField label="Capital" value={countryData.capital} />
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
