import { useEffect, useState } from 'react';

// Countdown title
//
// const App = () => {
//   const [times, setTimes] = useState(0);

//   const handleIncrementClick = () => {
//     setTimes(prev => prev + 1);
//   };

//   useEffect(() => {
//     document.title = `${times} times`;
//   });

//   return (
//     <>
//       <h2>{times} times clicked</h2>
//       <button onClick={handleIncrementClick}>Add 1</button>
//     </>
//   );
// };

// Counter title condition
//
// const App = () => {
//   const [times, setTimes] = useState(0);

//   const handleIncrementClick = () => {
//     setTimes(prev => prev + 1);
//   };

//   useEffect(() => {
//     if (times === 0) {
//       document.title = 'Welcome';
//     } else {
//       document.title = `${times} times clicked`;
//     }
//   });

//   return (
//     <>
//       <h2>{times} times clicked</h2>
//       <button onClick={handleIncrementClick}>Add 1</button>
//     </>
//   );
// };

// Products page title
//
function App() {
  const [products, setProducts] = useState([]);

  const handleInsertionClick = () => {
    setProducts([...products, { id: products.length }]);
  };

  useEffect(() => {
    const productCnt = products.length;
    if (productCnt === 0) {
      document.title = 'Add your first product';
    } else if (productCnt === 1) {
      document.title = 'You have 1 product';
    } else {
      document.title = `You have ${productCnt} product`;
    }
  });

  return (
    <>
      <h2>{products.length} times clicked</h2>
      <button onClick={handleInsertionClick}>Add a product</button>
    </>
  );
}
export default App;
