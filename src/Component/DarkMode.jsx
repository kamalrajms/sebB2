import React, { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  console.log(dark);

  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "20px",
      }}
    >
        {/* dark=false
        dark1=true
        dark2=false */}
      <button onClick={() => setDark(!dark)}>
        switch to {dark ? "Light" : "Dark"} Mode
      </button>
      <h2>you are in {dark ? "dark" : "light"} mode</h2>
    </div>
  );
}

// !true===false
// !false===true
