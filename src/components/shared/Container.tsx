import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  py?: string;
  px?: boolean;
}

const Container = ({ children, className = "",px = true, py = "py-20" }: ContainerProps): JSX.Element => {
  return <div className={`${className} ${py} ${px&&'px-3'} max-w-[1900px] w-full mx-auto`}>{children}</div>;
};

export default Container;