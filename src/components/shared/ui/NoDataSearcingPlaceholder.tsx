import searchingData from "@/assets/images/shared/searching-data.png";

const NoDataSearcingPlaceholder = (): JSX.Element => {
  return (
    <div className="flex  w-full justify-center col-span-3 -mt-16 sm:-mt-20 lg:-mt-52 mix-blend-overlay">
      <img src={searchingData} alt="searchingData" className=" w-full h-full" />
    </div>
  );
};

export default NoDataSearcingPlaceholder;
