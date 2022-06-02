import { createRoot } from 'react-dom/client';
import { useState } from 'react'; // Import useState

const root = createRoot(document.querySelector('#root'));

// Change event
//
// const Navbar = () => {
//   return (
//     <select
//       className='countries'
//       onChange={() => console.log('Country Changed')}
//     >
//       <option>Netherlands</option>
//       <option>Belgium</option>
//       <option>France</option>
//     </select>
//   );
// };
// root.render(<Navbar />);

// Name event handler
//
// function Counter() {
//   const handleIncrementClick = () => {
//     console.log('Button clicked');
//   };

//   return <button onClick={handleIncrementClick}>Add 1</button>;
// }
// root.render(<Counter />);

// Counter
//
// function Counter() {
//   const [times, setTimes] = useState(0);
//   const handleIncrementClick = () => {
//     setTimes(times + 1);
//   };
//   return (
//     <>
//       <h2>{times} times clicked</h2>
//       <button onClick={handleIncrementClick}>Add 1</button>
//     </>
//   );
// }
// root.render(<Counter />);

// Countdown
//
function Countdown() {
  const [count, setCount] = useState(10);

  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count} times remaining</h2>
      <button onClick={handleDecrementClick}>Count Down</button>
    </>
  );
}
root.render(<Countdown />);
