import { useState, useEffect } from "react";

const Timer = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeout]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return <p>Time Left: {formatTime(timeLeft)}</p>;
};

export default Timer;
