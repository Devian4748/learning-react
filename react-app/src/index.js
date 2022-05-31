import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// Payment methods dropdown
//
// function getPaymentMethods() {
//   return (
//     <select className='payment-methods'>
//       <option className='payment-method'>Card</option>
//       <option className='payment-method'>Paypal</option>
//       <option className='payment-method'>Cash on delivery</option>
//     </select>
//   );
// }

// root.render(getPaymentMethods());

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
