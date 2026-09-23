import React from "react";

export default function Hello(props) {
  return (
    <div className="hello">
      <h2>
        Hello all, how are you? {props.name}--{props.city}
      </h2>
    </div>
  );
}
