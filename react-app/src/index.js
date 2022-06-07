import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './Button';
import Hero from './Hero';
import Link from './Link';

const root = createRoot(document.querySelector('#root'));

<<<<<<< HEAD
<<<<<<< HEAD
//
// function Navbar(props) {
//   return (
//     <form>
//       <label htmlFor='name'>Name</label>
//       <input
//         value={name}
//         type='text'
//         name='name'
//         placeholder='Your name'
//         id='name'
//         onChange={handleNameChange}
//       />
//       <input type='submit' />
//       <p>Hello {name}</p>
//     </form>
//   );
// }
// root.render(<App />);

// Accessible Form 2
//
function RegisterForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [motivation, setMotivation] = useState('');

  return (
    <>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Enter your name'
        />
        <label htmlFor='type'>Type</label>
        <select
          id='type'
          name='type'
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option>Choose a type</option>
          <option>client</option>
          <option>merchant</option>
        </select>

        <label htmlFor='motivation'>Motivation</label>
        <textarea
          id='motivation'
          name='motivation'
          value={motivation}
          onChange={e => setMotivation(e.target.value)}
          placeholder='Your motivation to join'
        />
        <input type='submit' value='Register' />
      </form>
      <p>
        Your name is {name}. You would like to register as {type} because{' '}
        {motivation}.
      </p>
    </>
  );
}
root.render(<RegisterForm />);

=======
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
>>>>>>> parent of c9819fc (Add Props Sample)
