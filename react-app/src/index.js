import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// Shopping Cart
//
// function ShoppingCart(props) {
//   return <div>{props.count} items in your cart</div>;
// }
// root.render(<ShoppingCart count='5' />);

// More props
//
// function Navbar(props) {
//   return (
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
