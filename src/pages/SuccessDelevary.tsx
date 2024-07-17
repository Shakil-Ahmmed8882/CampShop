import BlurBall from "@/components/shared/visuals/BlurBall";
import { Button } from "@/components/ui/button";
import Description from "@/components/ui/Description";
import { useAppSelector } from "@/redux/hooks";
import {  useNavigate } from "react-router-dom";

const SuccessDelevary = (): JSX.Element => {

  const goTo = useNavigate()
  const {name, address,email,phone,totalPrice} = useAppSelector(state => state.checkout)


  return (
    <>
      <div className="flex flex-col items-center py-20 justify-center min-h-screen ">
        <BlurBall />
        <div
          className="rounded-lg  bg-gradient-to-tr text-wrap overflow-hidden from-[#1e3603f3] bg-blend-overlay  to-[#6e7e036c] text-card-foreground  w-full max-w-md p-4"
          data-v0-t="card"
        >

          <div className="flex flex-col items-center justify-center gap-4">
          <ChekcCirleIcon/>
          
            <h1 className=" text-[18px] sm:text-[25px] font-bold title-color pt-2">Order Placed Successfully!</h1>
            <Description className="text-[14px] sm:text-[18px] text-center my-2 mb-0" >
            Thank you for your Cash on Delivery (COD) order. Your order is
            being processed and will be delivered soon.
            </Description>
            
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full my-10"
          />
          <div className="grid gap-4">
            <div className="grid gap-2 space-y-3 title-color">
              <h2 className="font-semibold pb-4">Order Details</h2>
              {/* name */}
              <div className="grid text-[#cacaca] grid-cols-2 items-center">
                <span >Name:</span>
                <span>{name}</span>
              </div>
              {/* email */}
              <div className="grid text-[#cacaca] grid-cols-2 items-center ">
                <span >Email:</span>
                <span>{email?.split('@')[0] + '@..'}</span>
              </div>
              {/* phone */}
              <div className="grid text-[#cacaca] grid-cols-2 items-center">
                <span >Phone:</span>
                <span>{phone}</span>
              </div>
              {/* address */}
              <div className="grid text-[#cacaca] grid-cols-2 items-center">
                <span >Address:</span>
                <span>{address}</span>
              </div>
              {/* total */}
              <div className="grid grid-cols-2 items-center text-[#cacaca]">
                <span className="text-[#cacaca]">Total Amount:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="text-[#cacaca]">Payment Method:</span>
                <span>Cash on Delivery</span>
              </div>
            </div>
            <div className="flex pt-10 pb-4 gap-8">
              
              <Button onClick={()=> goTo('/')}  className="!text-primaryColor rounded-full flex-1 !bg-[#476b2b60]">
                Back to home
              </Button>
              
          <Button  onClick={()=> goTo('/products')} variant={"outline"} className="!text-primaryColor rounded-full flex-1 !bg-[#476b2b60]">
              Continue Shooping
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessDelevary;

const ChekcCirleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green-500 size-16 my-8 relative "
    >
      
      <circle cx={12} cy={12} r={10} />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};
