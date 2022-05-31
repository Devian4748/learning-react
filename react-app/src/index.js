import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// Navbar
//
// function getNavbar(user) {
//   return <div>Logged in as {user.name}. Log out</div>;
// }
// root.render(getNavbar({ name: 'Sam', age: 34 }));

// Notifications
//
// function getNotifications(notifications) {
//   return <p>You have {notifications.length} new notifications</p>;
// }

// const notifications = [
//   {
//     id: 1,
//     text: 'Your order has been delivered',
//   },
//   {
//     id: 2,
//     text: 'Your coupon code has expired',
//   },
// ];

// const element = getNotifications(notifications);
// root.render(element);

// Navbar Ⅱ
//
// function getNavbar(user) {
//   return (
//     <div>Logged in as {`${user.firstName} ${user.lastName}`}. Log out</div>
//   );
// }

// const element = getNavbar({
//   firstName: 'Sam',
//   lastName: 'Dung',
//   age: 27,
// });
// root.render(element);

// Dynamic class
//
// function getPaymentButton(user) {
//   const btnClasses = user.is_loggedin ? 'clickable' : 'disabled';
//   return <button className={btnClasses}>Pay</button>;
// }
// root.render(getPaymentButton({ id: 1, is_loggedin: true }));

// Payment methdos
//
function getPaymentMethod(name) {
  return <li className={`payment-method option-${name}`}>{name}</li>;
}
root.render(getPaymentMethod('paypal'));
