import { ReactNode } from "react";

const Description = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <p className="text-lg my-4 leading-[31px] text-[18px] mb-10 text-[#c6c6c6]">
      {children}
    </p>
  );
};

export default Description;
