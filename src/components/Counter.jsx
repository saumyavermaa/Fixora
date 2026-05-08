import React, { useEffect, useState } from "react";

export default function Counter({ label, target, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += Math.ceil(target / 50);

      if (start >= target) {
        start = target;
        clearInterval(interval);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="counter-card">
      <h2 style={{ color }}>{count}</h2>
      <p>{label}</p>
    </div>
  );
}