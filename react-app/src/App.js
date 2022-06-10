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

// Still there?
//
// function App() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const timeId = setTimeout(() => {
//       document.title = 'Still There?';
//     }, 1000);

//     return () => {
//       clearTimeout(timeId);
//     };
//   });

//   return (
//     <>
//       <h2>{counter}</h2>
//       <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
//         Add
//       </button>
//     </>
//   );
// }

// Scroll leak
//
function App() {
  const [random, setRandom] = useState(0);

  const dummyItems = Array.from({ length: 50 });

  useEffect(() => {
    const handleScrollEvent = e => {
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  });

  return (
    <>
      <button onClick={() => setRandom(Math.random())}>
        Re-render component
      </button>
      <h2>List of products</h2>
      <ul style={{ lineHeight: '40px' }}>
        {dummyItems.map((item, index) => (
          <li key={index}>Lorem ipsum dolor sit amet.</li>
        ))}
      </ul>
    </>
  );
}

export default App;
