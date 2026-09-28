import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 500);
    }
    return () => clearInterval(intervalId);
  }, [running]);
  const handleStart = () => {
    setRunning(true);
  };
  const handleStop = () => {
    setRunning(false);
  };
  const handlereset = () => {
    setSec(0);
    setRunning(false);
  };
  //   console.log(running);

  return (
    <div>
      <h1>timer:{sec}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}
