import { useState } from "react";

import CountriesList from "../components/CountriesList";
import LoadingSpinner from "../components/LoadingSpinner";
import Error from "../components/Error";
import useCountriesContext from "../hooks/useCountriesContext";
import QueryCountriesForm from "../components/QueryCountriesForm";

const HomePage = () => {
  const { countries, loading, error } = useCountriesContext();
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(query.toLowerCase()) &&
      (region.toLowerCase() === "all" ||
        country.region.toLowerCase() === region.toLowerCase())
  );

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
  };

  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <QueryCountriesForm
        query={query}
        onQueryChange={onQueryChange}
        onRegionChange={onRegionChange}
      />
      <CountriesList countries={filteredCountries} />
    </>
  );
};

export default HomePage;
