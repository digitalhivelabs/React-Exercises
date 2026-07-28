import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/5">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-sky-300/70">Digital Stopwatch</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">01 Stopwatch</h1>
          <p className="mt-2 text-sm text-slate-400">Simple timer with start, stop and reset controls.</p>
        </div>

        <div className="mb-8 rounded-[1.5rem] bg-slate-950/90 p-8 text-center shadow-inner ring-1 ring-white/5">
          <span className="text-[3rem] font-semibold tracking-[0.35em] text-white">{("0" + Math.floor((time / 60000 % 60))).slice(-2)}</span>
          <span className="mx-2 text-[3rem] font-semibold text-slate-400">:</span>
          <span className="text-[3rem] font-semibold tracking-[0.35em] text-white">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          <span className="mx-2 text-[3rem] font-semibold text-slate-400">:</span>
          <span className="text-[3rem] font-semibold tracking-[0.35em] text-white">{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <button
            onClick={() => setRunning((prev) => !prev)}
            className="min-w-[120px] rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-950 transition hover:bg-sky-400 hover:shadow-lg"
          >
            {running ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={() => setTime(0)}
            className="min-w-[120px] rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-200 transition hover:border-slate-500 hover:bg-slate-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
