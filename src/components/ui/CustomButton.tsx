import { ReactNode } from "react";
import { Button } from "./button";

const CustomButton = ({ children, px='px-14'}: { children: ReactNode,px?:string }): JSX.Element => {
  return (
    <Button className={`${px} text-primaryColor rounded-full  !bg-[#2c3f1d60] hover:bg-transparent `}>
      {children}
    </Button>
  );
};

export default CustomButton;
