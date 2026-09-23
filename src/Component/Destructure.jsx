import React from "react";
import Style from "./Destructure.module.css";

export default function Destructure({ name, city, age }) {
  return (
    <div className={Style.structure}>
      <h3>Name:{name}</h3>
      <h3>age:{age}</h3>
      <h3>city:{city}</h3>
    </div>
  );
}
