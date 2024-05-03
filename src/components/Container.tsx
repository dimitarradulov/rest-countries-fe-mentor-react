import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto px-4 lg:px-0">{children}</div>;
};

export default Container;
