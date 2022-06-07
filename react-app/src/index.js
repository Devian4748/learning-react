import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

<<<<<<< HEAD
// Accessible Form 1
=======
// Shopping Cart
//
// function ShoppingCart(props) {
//   return <div>{props.count} items in your cart</div>;
// }
// root.render(<ShoppingCart count='5' />);

// More props
>>>>>>> parent of 6a0d417 (Add Basic Forms Sample)
//
// function Navbar(props) {
//   return (
<<<<<<< HEAD
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
//     <>
//       <div>Welcome {`${props.user.first_name} ${props.user.last_name}`}</div>
//       <p>You've got {props.notifications.length} notifications</p>
//     </>
//   );
// }

// const notificatinos = [
//   { id: 1, text: 'Order delivered' },
//   { id: 2, text: 'Order received' },
// ];

// const user = {
//   first_name: 'Sam',
//   last_name: 'Wolf',
// };
// root.render(<Navbar notifications={notificatinos} user={user} />);

// Button Ⅰ
//
// function Button(props) {
//   return <button className={`btm-${props.size ?? 'medium'}`}></button>;
// }

// root.render(
//   <>
//     <Button size='small' />
//     <Button size='large' />
//     <Button />
//   </>
// );

// Button Ⅱ
//
// function Button(props) {
//   return <button>{props.children}</button>;
// }
// root.render(<Button>Login</Button>);

// Destructuring props
//
// function Button({ className, children }) {
//   return <button className={className}>{children}</button>;
// }
// root.render(<Button className='primary'>Login</Button>);
>>>>>>> parent of 6a0d417 (Add Basic Forms Sample)
