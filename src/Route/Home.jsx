import React, { useEffect, useState } from "react";
import UsePAramHook from "../Component/UsePAramHook";
import { useNavigate } from "react-router-dom";
import UseIdhook from "../Component/UseIdhook";
import UseSearchPAramHook from "../Component/UseSearchPAramHook";

export default function Home() {
  const page = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      page("/Contact");
    }
  }, [count]);
  return (
    <div>
      <UseSearchPAramHook />
      <UseIdhook />
      <UseIdhook />
      <h2> count-{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h2>Home component</h2>
      <UsePAramHook />
      <button onClick={() => page("/Contact")}>move to contact</button>
    </div>
  );
}
