import React from "react";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form action="" className="sticky flex justify-center gap-2 py-2 mx-auto">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search Character"
        type="text"
        className="w-full px-2 py-3 m-1 border-2 border-blue-400 rounded shadow-md md:w-1/2 "
      />
    </form>
  );
};

export default Search;
