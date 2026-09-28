import React, { useState, useEffect } from "react";

export default function Timer() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2>seconds:{sec}</h2>
    </div>
  );
}
