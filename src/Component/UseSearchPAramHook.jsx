import React from "react";
import { useSearchParams } from "react-router-dom";

export default function UseSearchPAramHook() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = () => {
    setSearchParams({ category: "lap", price: "5000000" });
  };
  return (
    <div>
      <h2>useSearchParams</h2>
      <button onClick={handleChange}>Chang filter</button>
    </div>
  );
}
