import React, { useContext } from "react";
import { Pass } from "../App";

export default function Third() {
  const PassName = useContext(Pass);
  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
      <h2>third component---{PassName}</h2>
    </div>
  );
}
