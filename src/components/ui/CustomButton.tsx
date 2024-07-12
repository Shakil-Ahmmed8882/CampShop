import { ReactNode } from "react";
import { Button } from "./button";

type TCustomButtonProps = {
     children: ReactNode;
      px?: string ;
      isDisabled?: boolean;
      className?:string;
      clickHandler?: () => void;
    
    };

const CustomButton = ({
  children,
  px = "px-14",
  clickHandler,
  isDisabled = false,
  className,
}: TCustomButtonProps): JSX.Element => {
  return (
    <Button
    disabled={isDisabled}
    onClick={clickHandler}
      className={`${px} ${className} text-primaryColor active:scale-50 smooth-transition rounded-full  bg-[#2c3f1d60] hover:!bg-[#476b2b60] smooth-transition`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
