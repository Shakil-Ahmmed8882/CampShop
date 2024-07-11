import { ReactNode } from "react";
import { Button } from "./button";

type TCustomButtonProps = {
     children: ReactNode;
      px?: string ;
      clickHandler?: () => void;
    
    };

const CustomButton = ({
  children,
  px = "px-14",
  clickHandler,
}: TCustomButtonProps): JSX.Element => {
  return (
    <Button
    onClick={clickHandler}
      className={`${px} text-primaryColor rounded-full  !bg-[#2c3f1d60] hover:!bg-[#476b2b60] smooth-transition`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
