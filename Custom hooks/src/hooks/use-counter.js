import { useState, useEffect } from "react";

const useCounter = (props) => {
  // console.log(props)
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + props);
    }, 1000);

    return () => clearInterval(interval);
  }, [props]);

  return counter;
};

export default useCounter;
