import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemPerPage = 5;

  //array
  //  allitem= [{id:1},{id:2},,,,,,,,,,{id:20},{id:21}]
  const allItems = Array.from({ length: 21 }, (_, i) => ({ id: i + 1 }));

  // calculation

  const totalPage = Math.ceil(allItems.length / itemPerPage);
  const startInd = (currentPage - 1) * itemPerPage; //0   5   10
  const endInd = startInd + itemPerPage; //5   10   15
  const currentItems = allItems.slice(startInd, endInd);
  console.log(currentItems);

  //   4.5= 5
  //   4.2= 4
  //   4.7= 5

  //   4.5= 5
  //   4.2= 5
  //   4.7= 5

  const gotoPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage) {
      setSearchParams({ page: pageNum });
    }
  };

  const Previous = () => {
    if (currentPage > 1) {
      gotoPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPage) {
      gotoPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h2>useSearchParams hook eg 2</h2>

      {currentItems.map((item) => (
        <h2 key={item.id}>{item.id}</h2>
      ))}

      <div>
        <button onClick={Previous}>previous</button>
        <div>
          {/* [1,2,3,4,5] */}
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNum) => (
            <button key={pageNum}>{pageNum}</button>
          ))}
        </div>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  );
}
