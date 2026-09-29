import React from "react";
import ContextBtn from "./ContextBtn";
import { Pass } from "../App";
import { useContext } from "react";

export default function ContextField() {
  const { data } = useContext(Pass);
  return (
    <div>
      <input type="text" value={data.name}/>
      <ContextBtn />
    </div>
  );
}
