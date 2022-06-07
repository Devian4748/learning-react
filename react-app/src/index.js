import React from 'react';
import { createRoot } from 'react-dom/client';
import Card from './Card';

const root = createRoot(document.querySelector('#root'));

// Passing functions
//
// const App = () => {
//   const handleCardLoad = () => {
//     console.log('Card has loaded');
//   };

//   return <Card onCardLoad={handleCardLoad} />;
// };
// root.render(<App />);

// Calling passed functinos
//
function App() {
  const handleCardClick = () => {
    console.log('Card got clicked');
  };
  return <Card onCardClick={handleCardClick} />;
}
root.render(<App />);
