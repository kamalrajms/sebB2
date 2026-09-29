import React, { useReducer } from "react";

export default function UseReducerHook() {
  const initialState = { count: 0 };

  function reducerCount(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  //   action={type:"increment"}

  const [state, dispatch] = useReducer(reducerCount, initialState);
  return (
    <div>
      <h1>Count :{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>incremnt</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
