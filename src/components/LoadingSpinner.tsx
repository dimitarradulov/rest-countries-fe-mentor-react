import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useThemeContext from "../hooks/useThemeContext";

type LoadingSpinnerProps = {
  loading: boolean;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const LoadingSpinner = ({ loading }: LoadingSpinnerProps) => {
  const { theme } = useThemeContext();

  return (
    <ClipLoader
      color={theme === "light" ? "black" : "white"}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingSpinner;
