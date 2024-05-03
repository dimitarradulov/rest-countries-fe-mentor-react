import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";

import CountryDetails from "../components/CountryDetails";
import Button from "../components/Button";
import useCountriesContext from "../hooks/useCountriesContext";
import LoadingSpinner from "../components/LoadingSpinner";
import Error from "../components/Error";

const CountryPage = () => {
  const { id: cca2 } = useParams();
  const { countries, loading, error } = useCountriesContext();
  const country = countries.slice().find((country) => country.cca2 === cca2);
  const borderCountries = country?.borders?.map((border) => {
    return countries.find((country) => country.cca3 === border)!;
  });

  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!country) {
    return <p className="text-center">No Country Found!</p>;
  }

  return (
    <>
      <Link to="/">
        <Button className="flex items-center gap-2 py-2 px-9 md:mb-20 md:mt-10 mb-10 mt-5">
          <FaArrowLeft />
          <span>Back</span>
        </Button>
      </Link>

      <CountryDetails
        country={country}
        borderCountries={borderCountries ?? []}
      />
    </>
  );
};

export default CountryPage;
