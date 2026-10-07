import { useState } from "react";

function useCount(intialValue) {
  const [count, setCount] = useState(intialValue);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return { count, increment, decrement, reset };
}
export default useCount;
