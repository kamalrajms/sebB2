import React, { useContext } from "react";
import { Pass } from "../App";

export default function ContextBtn() {
  const { mode, setMode } = useContext(Pass);
  return (
    <div>
      <button
        onClick={() => {
          setMode(mode === "light" ? "black" : "light");
        }}
      >
        theme--{mode}
      </button>
    </div>
  );
}
