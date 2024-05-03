import axios, { AxiosError } from "axios";

export const handleFetchError = (error: unknown) => {
  console.error(error);

  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    return axiosError.message;
  } else {
    return "An unknown error occurred! Please try again later.";
  }
};
