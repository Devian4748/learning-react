import { createRoot } from 'react-dom/client';
import { useState } from 'react'; // Import useState

const root = createRoot(document.querySelector('#root'));

// Amdin Permissions
//
// const Admin = ({ userType }) => {
//   const adminContent = (
//     <>
//       <h1>Welcome Admin</h1>
//       <p>The Admin portal allows you to manage all your items</p>
//     </>
//   );

//   const content = {
//     admin: adminContent,
//     client: <NotPermission />,
//   };

//   return content[userType];
// };

// const NotPermission = () => {
//   return (
//     <>
//       <h1>Not allowed</h1>
//       <p>
//         You do not have permission to access this page. Please contact your
//         account manager.
//       </p>
//     </>
//   );
// };

// root.render(
//   <>
//     <Admin userType='client' /> <Admin userType='admin' />{' '}
//   </>
// );

// Dashboard
//
// function Dashboard({ loggedin }) {
//   return (
//     <div className='container'>
//       {loggedin ? <h1>Welcome Back</h1> : <h1>Welcome</h1>}
//     </div>
//   );
// }
// root.render(
//   <>
//     <Dashboard loggedin={true} />
//     <Dashboard loggedin={false} />
//   </>
// );

// Navbar notifications
//
const Navbar = ({ notifications }) => {
  return (
    <>
      <h2>Welcome user</h2>
      {notifications && <p>You've got {notifications.length} notifications</p>}
    </>
  );
};

const notifications = [
  { id: 1, text: 'Welcome to our supermarket' },
  { id: 2, text: 'Your order has shipped' },
  { id: 3, text: 'Your order has shipped' },
];

root.render(
  <>
    <Navbar notifications={[]} />
    <Navbar notifications={notifications} />
  </>
);
