import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  py?: string;
  px?: string;
}

const Container = ({ children, className = "", py = "py-20" }: ContainerProps): JSX.Element => {
  return <div className={`${className} ${py} max-w-[1900px] w-full mx-auto`}>{children}</div>;
};

export default Container;