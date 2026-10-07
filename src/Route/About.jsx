import React from "react";
import Page from "../Component/Page";
// import FetchAPi from "../Component/FetchAPi";
import useCount from "../Component/useCount";

export default function About() {
  const { count, increment, decrement, reset } = useCount(7);
  return (
    <div>
      <h2>About component</h2>
      <h2>count:{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
     
      <Page />
    </div>
  );
}
