import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './Button';
import Hero from './Hero';
import Link from './Link';

const root = createRoot(document.querySelector('#root'));

// Hero Component
//
// const Hero = () => {
//   return (
//     <>
//       <h1>Welcome to our supermarket</h1>
//       <p>Start shopping</p>
//     </>
//   );
// };
// root.render(<Hero />);

// Navbar Component
//
// function Navbar() {
//   return (
//     <>
//       <h3>Supermarket</h3>
//       <p>Start shopping</p>
//     </>
//   );
// }
// root.render(React.createElement(Navbar, null));

// One Component per file
//
// root.render(<Hero />);

// Mutiple Components
//
function App() {
  return (
    <>
      <Button />
      <Button />
      <Link />
    </>
  );
}
root.render(<App />);
