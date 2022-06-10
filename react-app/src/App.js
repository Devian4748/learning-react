import { useEffect, useState } from 'react';

// Log Once
//
// function App() {
//   const [random, setRandom] = useState(0);

//   useEffect(() => {
//     console.log('Done mounting');
//   }, []);

//   return (
//     <button onClick={() => setRandom(Math.random())}>
//       Re-render component
//     </button>
//   );
// }

// Run on 'lives' change
//
// function App() {
//   const [count, setCount] = useState(5);
//   const [lives, setLives] = useState(3);

//   useEffect(() => {
//     document.title = `You have ${lives} left`;
//     console.log(`effect running. Lives: ${lives}`);
//   }, [lives]);

//   function handleCountdownClick() {
//     if (count > 0) {
//       setCount(prev => prev - 1);
//     } else if (count === 0) {
//       setCount(5);
//       setLives(prev => prev - 1);
//     }
//   }

//   return (
//     <>
//       <h2>Attempts remaining: {count}</h2>
//       <button onClick={handleCountdownClick}>Count down</button>
//       <h3>Lives remaining: {lives}</h3>
//     </>
//   );
// }

function App() {
  const [count, setCount] = useState(5);
  const [lives, setLives] = useState(3);

  const handleCountdownClick = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    } else {
      setCount(5);
      setLives(prev => prev - 1);
    }
  };

  useEffect(() => {
    console.log('first render');

    return () => {
      console.log('will be removed');
    };
  }, []);

  useEffect(() => {
    console.log('count changed');
  }, [count]);

  useEffect(() => {
    console.log('lives changed');
  }, [lives]);

  useEffect(() => {
    console.log('count or lives changed');
  }, [count, lives]);

  return (
    <>
      <h2>Attempts remaining: {count}</h2>
      <button onClick={handleCountdownClick}>Count down</button>
      <h3>Lives remaining: {lives}</h3>
    </>
  );
}
export default App;
