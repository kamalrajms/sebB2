import React, { useReducer } from "react";

export default function ReducerForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  function fromReducer(state, action) {
    return {
      ...state, //previous data
      [action.field]: action.value, // updated data
    };
  }
  //   action={
  //   field: "name",
  //   value: "kbfhbf",
  // }

  const [state, dispatch] = useReducer(fromReducer, initialState);
  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>Reducer Form</h2>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Enter a email"
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
        placeholder="Enter a password"
      />
    </div>
  );
}
