import { createRoot } from 'react-dom/client';
import { useState } from 'react'; // Import useState

const root = createRoot(document.querySelector('#root'));

// Proper Countdown
//
// function Countdown() {
//   const [times, setTimes] = useState(5);

//   const handleDecrementClick = () => {
//     if (times > 0) {
//       setTimes(times - 1);
//     }
//   };

//   const isDisabledBtn = times <= 0;

//   return (
//     <>
//       <h2>{times} times remaining</h2>
//       <button disabled={isDisabledBtn} onClick={handleDecrementClick}>
//         Countdown
//       </button>
//     </>
//   );
// }
// root.render(<Countdown />);

// Resetting Clock
//
// function Clock() {
//   const [seconds, setSeconds] = useState(0);

//   const handleIncrementClick = () => {
//     if (seconds < 59) {
//       setSeconds(seconds + 1);
//     } else {
//       setSeconds(0);
//     }
//   };

//   return (
//     <>
//       <h1>{seconds} seconds</h1>
//       <button onClick={handleIncrementClick}>Add 1</button>
//     </>
//   );
// }

// root.render(<Clock />);

// Counter with modes
//
// function App() {
//   const [mode, setMode] = useState('Increment');

//   return (
//     <>
//       <Mode mode={mode} onChangeMode={setMode} />
//       <Counter mode={mode} />
//     </>
//   );
// }

// function Mode({ mode, onChangeMode }) {
//   const handleModeChange = ({ target: { value } }) => {
//     onChangeMode(value);
//   };

//   return (
//     <select onChange={handleModeChange} value={mode}>
//       <option>Increment</option>
//       <option>Decrement</option>
//     </select>
//   );
// }
// function Counter({ mode }) {
//   const [times, setTimes] = useState(0);

//   const handleTimesClick = () => {
//     if (mode === 'Increment') {
//       setTimes(times + 1);
//     } else if (mode === 'Decrement') {
//       setTimes(times - 1);
//     }
//   };

//   return (
//     <>
//       <h2>{mode}ing mode</h2>
//       <h3>{times} times</h3>
//       <button onClick={handleTimesClick}>{mode}</button>
//     </>
//   );
// }
// root.render(<App />);

// Configurable Counter
//
function App() {
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <InputIncrementBy
        incrementBy={incrementBy}
        onChangeIncrementBy={setIncrementBy}
      />
      <Counter incrementBy={incrementBy} />
    </>
  );
}

const InputIncrementBy = ({ incrementBy, onChangeIncrementBy }) => {
  const handleIncrementByChange = ({ target: { value } }) => {
    onChangeIncrementBy(value);
  };

  return (
    <>
      <label htmlFor='increment'>Increment By </label>
      <input
        id='increment'
        type='number'
        onChange={handleIncrementByChange}
        value={incrementBy}
      />
    </>
  );
};

const Counter = ({ incrementBy }) => {
  const [times, setTimes] = useState(0);

  const handleTimesClick = () => {
    setTimes(
      times + (incrementBy === '' ? 0 : Number.parseInt(incrementBy, 10))
    );
  };

  return (
    <>
      <h2>{times} times</h2>
      <button onClick={handleTimesClick}>Add {incrementBy}</button>
    </>
  );
};

root.render(<App />);
