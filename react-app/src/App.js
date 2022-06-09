import { useState } from 'react';
// Functional state update
//
const App = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrementClick = () => {
    setCounter(prev => prev + 1);
  };
  const handleDecrementClick = () => {
    setCounter(prev => prev - 1);
  };
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </>
  );
};

export default App;
