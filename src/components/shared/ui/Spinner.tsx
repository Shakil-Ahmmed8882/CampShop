import { Oval} from "react-loader-spinner";

const Spinner = (): JSX.Element => {
  return (
    <div className=" flex justify-center items-center h-[80vh] w-full">
      <Oval
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
