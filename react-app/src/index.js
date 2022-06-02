import { createRoot } from 'react-dom/client';
import { useState } from 'react'; // Import useState
const root = createRoot(document.querySelector('#root'));

// Click to log
//
// function App() {
//   const handleLogClick = () => {
//     console.log('Hello World');
//   };
//   return <button onClick={handleLogClick}>Button</button>;
// }

// root.render(<App />);

// Counter
//
// const Counter = () => {
//   const [times, setTimes] = useState(0);
//   return (
//     <>
//       <button onClick={() => setTimes(times + 1)}>Add one</button>
//       <h2>{times} times clicked</h2>
//     </>
//   );
// };

// root.render(<Counter />);

// Countdown
//
// function Countdown() {
//   const [times, setTimes] = useState(10);

//   return (
//     <>
//       <h2>{times} times remaining</h2>
//       <button onClick={() => setTimes(times - 1)}>Count Down</button>
//     </>
//   );
// }

// root.render(<Countdown />);
