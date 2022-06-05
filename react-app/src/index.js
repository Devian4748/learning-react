import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.querySelector('#root'));

// Dark mode toggle
//
// function App() {
//   const [settings, setSettings] = useState({
//     title: 'Content here',
//     dark_theme: true,
//   });

//   const handleToggleClick = () => {
//     setSettings({ ...settings, dark_theme: !settings.dark_theme });
//   };

//   const className = settings.dark_theme ? 'dark' : 'light';

//   return (
//     <div className={className}>
//       <h1>{settings.title}</h1>
//       <button onClick={handleToggleClick}>Toggle theme</button>
//     </div>
//   );
// }

// root.render(<App />);

// Person age
//
// function Person() {
//   const [user, setUser] = useState({
//     id: 1,
//     first_name: 'Alex',
//     age: 20,
//   });

//   const handleIncrementClick = () => {
//     setUser({ ...user, age: user.age + 1 });
//   };

//   return (
//     <div>
//       <p>
//         {user.first_name} is {user.age} years old.
//       </p>
//       <button onClick={handleIncrementClick}>Increment age</button>
//     </div>
//   );
// }
// root.render(<Person />);

// Order Insurance
//
function OrderInsurance() {
  const [order, setOrder] = useState({
    id: 1,
    items: [1, 4, 10],
  });

  const handleAddClick = () => {
    setOrder({ ...order, insurance: 'basic' });
  };

  const handleRemoveClick = () => {
    const { insurance, ...rest } = order;
    setOrder(rest);
  };

  const isExistInsurance = order.insurance !== undefined;

  return (
    <div>
      <h1>Your order</h1>
      {order.insurance ? <p>Order is insured</p> : <p>Order is not insured</p>}
      <button disabled={isExistInsurance} onClick={handleAddClick}>
        Add insurance
      </button>
      <button disabled={!isExistInsurance} onClick={handleRemoveClick}>
        Remove insurance
      </button>
    </div>
  );
}
root.render(<OrderInsurance />);
