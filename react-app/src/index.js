import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// Basic JSX
//
// const element = <p>My first JSX</p>;
// root.render(element);

// Attributes Ⅰ
//
// const element = (
//   <p className='selected' id='promo'>
//     Hello World
//   </p>
// );
// root.render(element);

// Supermarket tagline
//
// function getTagline() {
//   return <h2 className='subtitle'>Grocery shopping simplified.</h2>;
// }
// root.render(getTagline());

// Login status
//
/**
 *
 * @param {boolean} is_loggedin
 * @returns
 */
// function getLoginStatus(is_loggedin) {
//   let element = <p>You are logged in</p>;
//   if (!is_loggedin) {
//     element = <a href='/login'>Login</a>;
//   }

//   return element;
// }
// console.log(getLoginStatus(true));
// console.log(getLoginStatus(false));
