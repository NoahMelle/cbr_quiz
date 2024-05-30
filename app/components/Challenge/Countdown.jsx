import React from "react";
import { useEffect } from "react";

const initialSeconds = 15;

export default function Countdown({  timeUp  ,  setTimeUp}) {
  if (!timeUp) {
    const [seconds, setSeconds] = React.useState(initialSeconds);
    useEffect(() => {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else {
          clearInterval(timer);
          setTimeUp(true);
        }
      }, 1000);

      return () => clearInterval(timer);
    }, [seconds]);

    return (
      <div>
        <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>
    );
  }
}
