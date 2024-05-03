type CountryFieldProps = {
  label: string;
  value: string | number | JSX.Element;
  className?: string;
};

const CountryField = ({ label, value, className }: CountryFieldProps) => {
  return (
    <p className={className}>
      <span className="font-semibold mr-1">{label}:</span>
      <span>{value}</span>
    </p>
  );
};

export default CountryField;
