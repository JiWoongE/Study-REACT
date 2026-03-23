import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => setSeconds((prev) => prev + 0.01), 10);
      console.log("Timer Start");
      return () => {
        clearInterval(id);
        console.log("Clean Up!!");
      };
    }
  }, [isRunning]);

  return (
    <div>
      <h1>{seconds.toFixed(2)}초</h1>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "정지" : "시작"}
      </button>
      <button
        onClick={() => setRecords((prev) => [...prev, seconds])}
        disabled={!isRunning}
      >
        기록
      </button>
      <button
        onClick={() => {
          setSeconds(0);
          setRecords([]);
          setIsRunning(false);
        }}
        disabled={isRunning}
      >
        초기화
      </button>
      <h2>기록</h2>
      {records.map((record, idx) => {
        return <div key={idx}>{record.toFixed(2)}초</div>;
      })}
    </div>
  );
}
