import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  return (
    <ReactPaginate
      className="flex list-reset pl-0 rounded justify-center gap-1 my-2"
      forcePage={pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn-main"
      previousClassName="btn-main"
      pageClassName="btn-page"
      activeClassName="btn-page-active"
      disabledClassName="btn-page-disabled"
      disabledLinkClassName="cursor-not-allowed"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
