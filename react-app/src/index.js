import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// Countdown with lives
//
// function Countdown() {
//   const [count, setCount] = useState(5);
//   const [live, setLive] = useState(3);

//   const handleDecrementClick = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     } else {
//       setCount(5);
//       setLive(live - 1);
//     }
//   };

//   return (
//     <>
//       <h2>Attempts remaining: {count}</h2>
//       <button onClick={handleDecrementClick}>Count down</button>
//       <h3>Lives remaining: {live}</h3>
//     </>
//   );
// }

// root.render(<Countdown />);

// Conditional counter
//
// function Countdown({ enabled }) {
//   const [count, setCount] = useState(5);

//   const handleDecrementClick = () => {
//     if (enabled) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <>
//       <h2>Attempts remaining: {count}</h2>
//       <button onClick={handleDecrementClick}>Count down</button>
//     </>
//   );
// }

// root.render(
//   <>
//     <Countdown enabled={true} />
//     <Countdown enabled={false} />
//   </>
// );
