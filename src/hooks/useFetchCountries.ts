import { useEffect, useState } from "react";
import axios from "axios";

import { Country } from "../models/country.model";
import { BASE_URL } from "../constants";
import { handleFetchError } from "../utils/error.utils";
import { mapCountries } from "../utils/countries.utils";

const useFetchCountries = (restOfUrl = "all") => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${restOfUrl}`);
        const countries = mapCountries(response.data);
        setCountries(countries);
      } catch (err) {
        const errorMessage = handleFetchError(err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [restOfUrl]);

  return { countries, loading, error };
};

export default useFetchCountries;
