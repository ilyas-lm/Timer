import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center w-80">
      <h2 className="text-6xl font-mono mb-6">{formatTime(timeLeft)}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsRunning(true)}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded transition"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded transition"
        >
          Pause
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(25 * 60);
          }}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
