import { createRoot } from 'react-dom/client';
import { useState } from 'react'; // Import useState
const root = createRoot(document.querySelector('#root'));

// Counter
//
// function Counter() {
//   const [seconds, setSeconds] = useState(0);
//   return <h2>{seconds} seconds elapsed.</h2>;
// }
//
// root.render(<Counter />);

// Counterdown
//
function Counterdown() {
  const [count, setCount] = useState(10);
  return <h2>{count} times remaining</h2>;
}

root.render(<Counterdown />);
