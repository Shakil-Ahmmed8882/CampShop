import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <h1 className="text-5xl leading-[60px] font-bold mb-4 text-[#ececec] ">{children}</h1>
  );
};

export default Title;
