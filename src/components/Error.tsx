type ErrorProps = {
  message: string;
};

const Error = ({ message }: ErrorProps) => {
  return <p className="text-center mt-8 text-red-500">{message}</p>;
};

export default Error;
