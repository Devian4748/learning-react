import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// User age
//
// const User = props => {
//   return (
//     <form>
//       <input type='number' defaultValue={props.age} name='age' />
//     </form>
//   );
// };

// root.render(<User age={23} />);

// Log the name
//
// function Checkout() {
//   const handleNameChange = ({ target: { value } }) => {
//     console.log(value);
//   };
//   return (
//     <form>
//       <input name='name' onChange={handleNameChange} />
//     </form>
//   );
// }

// root.render(<Checkout />);

// Controlled Input 1
//
// function App() {
//   const [name, setName] = useState('');

//   const handleNameChange = ({ target: { value } }) => {
//     setName(value);
//   };

//   return (
//     <>
//       <input type='text' name='name' onChange={handleNameChange} value={name} />
//       <p>Hello {name}</p>
//     </>
//   );
// }

// root.render(<App />);

// Controlled Input 2
//
// const App = () => {
//   const [quantity, setQuantity] = useState(0);
//   const handleQuantityChange = ({ target: { value } }) => {
//     setQuantity(value);
//   };
//   return (
//     <>
//       <input
//         type='number'
//         name='quantity'
//         value={quantity}
//         onChange={handleQuantityChange}
//       />
//       <p>Ordering {quantity} items</p>
//     </>
//   );
// };
// root.render(<App />);

// Registeration form
//
// function RegisterForm() {
//   const [detail, setDetail] = useState({
//     name: 'NAME',
//     type: 'TYPE',
//     motivation: 'MOTIVATION',
//   });

//   const handleNameChange = ({ target: { value } }) => {
//     setDetail({ ...detail, name: value });
//   };
//   const handleTypeChange = ({ target: { value } }) => {
//     setDetail({ ...detail, type: value });
//   };
//   const handleMotivationChange = ({ target: { value } }) => {
//     setDetail({ ...detail, motivation: value });
//   };

//   return (
//     <>
//       <form>
//         <input
//           type='text'
//           name='name'
//           placeholder='Enter your name'
//           value={detail.name}
//           onChange={handleNameChange}
//         />
//         <select name='type' value={detail.type} onChange={handleTypeChange}>
//           <option>Choose a type</option>
//           <option>client</option>
//           <option>merchant</option>
//         </select>
//         <textarea
//           name='motivation'
//           placeholder='Your motivation to join'
//           value={detail.motivation}
//           onChange={handleMotivationChange}
//         ></textarea>
//         <input type='submit' value='Register' />
//       </form>
//       <p>
//         Your name is {detail.name}. You would like to register as {detail.type}{' '}
//         because {detail.motivation}.
//       </p>
//     </>
//   );
// }
// root.render(<RegisterForm />);

// Reset on submit
//
// function RegisterForm() {
//   const [detail, setDetail] = useState({ name: '', type: '', motivation: '' });

//   const handleFormSubmit = e => {
//     e.preventDefault();

//     setDetail({ name: '', type: '', motivation: '' });
//   };

//   return (
//     <>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type='text'
//           name='name'
//           value={detail.name}
//           onChange={e => setDetail({ ...detail, name: e.target.value })}
//           placeholder='Enter your name'
//         />
//         <select
//           name='type'
//           value={detail.type}
//           onChange={e => setDetail({ ...detail, type: e.target.value })}
//         >
//           <option>Choose a type</option>
//           <option>client</option>
//           <option>merchant</option>
//         </select>
//         <textarea
//           name='motivation'
//           value={detail.motivation}
//           onChange={e => setDetail({ ...detail, motivation: e.target.value })}
//           placeholder='Your motivation to join'
//         />
//         <input type='submit' value='Register' />
//       </form>
//       <p>
//         Your name is {detail.name}. You would like to register as {detail.type}{' '}
//         because
//         {detail.motivation}.
//       </p>
//     </>
//   );
// }
// root.render(<RegisterForm />);
