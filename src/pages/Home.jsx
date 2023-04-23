import React, { useState, useEffect } from "react";
import Card from "../components/Card/Cards";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import ScrollUp from "../components/Scroll/ScrollUp";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");

  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [api]);

  return (
    <div className="font-mono">
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="grid grid-cols-1 gap-2 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl ">
        <Card results={results} />
      </div>

      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        info={info}
      />

      <ScrollUp />
    </div>
  );
};

export default Home;
