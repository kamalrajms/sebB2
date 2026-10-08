import React from "react";
import { useSelector } from "react-redux";

export default function CustomerView() {
  const customer = useSelector((state) => state.customer);
  return (
    <div>
      <h3>Customer List</h3>
      {customer.map((person, ind) => (
        <h3 key={ind}>{person}</h3>
      ))}
    </div>
  );
}
