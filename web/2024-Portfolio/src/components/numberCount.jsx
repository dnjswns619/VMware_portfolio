import React, {useEffect, useState} from "react";

const easeOutQuad = (t) => t * (2 - t);

const UseCountUp = ({ targetNumber, duration, start }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if(!start) return;

    const end = parseInt(targetNumber, 10);
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let percent = Math.min(progress / duration, 1);
      percent = easeOutQuad(percent);

      setCurrentNumber(Math.floor(percent * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCurrentNumber(end);
      }
    };

    requestAnimationFrame(animate);
  }, [start, targetNumber, duration]);

  return (
    <span className="countNum">{currentNumber}</span>
  )
}

export default UseCountUp;