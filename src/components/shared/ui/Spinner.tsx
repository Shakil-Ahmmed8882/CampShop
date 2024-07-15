import { RevolvingDot } from "react-loader-spinner";

const Spinner = (): JSX.Element => {
  return (
    <div className=" flex justify-center items-center h-[80vh] w-full">
      <RevolvingDot
        visible={true}
        height="100%"
        width="100%"
        color="#9ADE66"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
