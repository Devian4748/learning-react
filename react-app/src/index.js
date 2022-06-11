import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// Clock Component
//
// const App = () => {
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setDate(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <h2>{date.toLocaleTimeString()}</h2>;
// };

// Stopwatch
//
function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const timerId = setTimeout(() => {
        setCounter(prev => prev + 1);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [counter, isRunning]);

  const handleCounterToggle = () => {
    setIsRunning(prev => !prev);
  };

  const handleCounterReset = () => {
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleCounterToggle}>Start / Pause</button>
      <button onClick={handleCounterReset}>Stop</button>
    </>
  );
}
root.render(<App />);
