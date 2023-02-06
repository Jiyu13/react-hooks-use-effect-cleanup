import React, { useState, useEffect } from "react";

// 1. a component that runs a timer in the bg continuously
function Clock() {
  const [time, setTime] = useState(new Date());

  // 
  useEffect(() => {
    // 4. setInterval()'s still running in the bg even this component is removed from DOM
    // 6. assign setInterval() to a variable
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    // 5. return a cleanup function to stop setInterval, 
    // clearInterval(intervalID) will cancel setInterval()
    return function cleanup() {
      clearInterval(timerID)
    }

  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
