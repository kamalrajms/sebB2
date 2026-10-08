import React, { useState } from "react";

import { addCustomer } from "./Slice/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function add() {
    if (input) {
      dispatch(addCustomer(input));
    }
  }
  return (
    <div>
      <h3>add new customer</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Add user</button>
    </div>
  );
}
