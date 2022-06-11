import React, { useEffect, useState } from 'react';
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

// Dropdown menu
//
// function getDropdownMenu() {
//   return (
//     <ul id='dropdown-menu' class='dropdown'>
//       <li>Profile</li>
//       <li>Orders</li>
//       <li class='separator'></li>
//       <li>Logout</li>
//     </ul>
//   );
// }
// root.render(getDropdownMenu());

// User Avatar
//
// function getUserAvatar(path) {
//   return <img src={path} alt='user avatar' />;
// }
// root.render(
//   getUserAvatar(
//     'https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png'
//   )
// );

// Footer
//
function getFooter() {
  return (
    <>
      <h3>Your online supermarket</h3>
      <ul>
        <li>Contact</li>
        <li>Press</li>
        <li>About</li>
      </ul>
      <p>All rights reserved &copy;</p>
    </>
  );
}
root.render(getFooter());

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
