const Search = ({
  search,
  handleSearch,
}: {
  search: boolean;
  handleSearch: (param1: boolean) => void;
}): JSX.Element => {
  return (
    <>
      <button className="z-30" onClick={() => handleSearch(!search)}>
        <SearchIcon />
      </button>
    </>
  );
};

export default Search;

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 md:size-7 text-[gray] cursor-pointer smooth-transition !duration-300 hover:text-white "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};
