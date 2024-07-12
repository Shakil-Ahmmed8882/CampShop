import { ReactNode } from "react";

const Title = ({ children , className }: { children: ReactNode, className?: string }): JSX.Element => {
  return (
    <h1 className={`${className} text-3xl sm:text-4xl lg:text-5xl sm:leading-[50px] lg:leading-[60px] font-bold mb-4 text-[#ececec] `}>{children}</h1>
  );
};

export default Title;
