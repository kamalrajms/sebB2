import React, { useContext } from "react";
import ContextField from "./ContextField";
import { Pass } from "../App";

export default function ContextFrom() {
  const { mode } = useContext(Pass);
  return (
    <div className={mode}>
      <h2>Context form</h2>
      <ContextField />
    </div>
  );
}
