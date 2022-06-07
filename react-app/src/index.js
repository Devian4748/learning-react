import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

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
