import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// List Apps
//
// function Apps({ items }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// const apps = ['Calculator', 'Phone', 'Messages', 'Maps'];
// root.render(<Apps items={apps} />);

// List Products
//
// function Products() {
//   const [products, setProducts] = useState([
//     'Almond',
//     'Cashew',
//     'Rice',
//     'Water',
//   ]);
//   return (
//     <ul>
//       {products.map((product, index) => (
//         <li key={index}>{product}</li>
//       ))}
//     </ul>
//   );
// }
// root.render(<Products />);

// Shopping Wallet
//
// function Wallet() {
//   const [transactions, setTransactions] = useState([]);

//   const handleDepositClick = () => {
//     setTransactions([...transactions, 10]);
//   };

//   const handleWithdrawClick = () => {
//     setTransactions([...transactions, -10]);
//   };

//   const handleResetClick = () => {
//     setTransactions([]);
//   };

//   return (
//     <>
//       <button onClick={handleDepositClick}>Deposit 10</button>
//       <button onClick={handleWithdrawClick}>Withdraw 10</button>
//       <h2>
//         Total: {transactions.reduce((total, current) => total + current, 0)}
//       </h2>
//       <button onClick={handleResetClick}>Reset</button>
//       <ul>
//         {transactions.map((transaction, index) => (
//           <li key={index}>{transaction}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// root.render(<Wallet />);

// Undo action
//
function Wallet() {
  const [transactions, setTransactions] = useState([]);
  const handleDepositClick = () => {
    setTransactions([...transactions, transactions.length + 1]);
  };

  const handleUndoClick = () => {
    // end not included
    setTransactions(transactions.slice(0, transactions.length - 1));
  };

  return (
    <>
      <button onClick={handleDepositClick}>Deposit</button>
      <button onClick={handleUndoClick}>Undo</button>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </>
  );
}

root.render(<Wallet />);
