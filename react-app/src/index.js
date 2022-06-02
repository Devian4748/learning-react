import { createRoot } from 'react-dom/client';
import clsx from 'clsx';
import classes from './theme.module.css';
import Button from './Button';

const root = createRoot(document.querySelector('#root'));

// Conditional Rendering
//
// const user = {
//   name: 'Same Blue',
//   id: 1,
// };

// const WelcomeUser = props => {
//   if (!props.user) return null;
//   return <div>Welcome {props.user.name}</div>;
// };

// root.render(
//   <>
//     <WelcomeUser user={user} />
//     <WelcomeUser />
//   </>
// );

// Dark theme Ⅰ
//
// const Navbar = props => {
//   const { theme } = props;
//   return <h1 className={classes[theme]}>Online supermarket</h1>;
// };

// root.render(
//   <>
//     <Navbar theme='dark' />
//     <Navbar theme='light' />
//   </>
// );

// Dark theme Ⅱ
//
// const Navbar = props => {
//   const { theme } = props;
//   const themeClass = `${classes.navbar} ${classes[clsx(theme)]}`;
//   return <h1 className={themeClass}>Online supermarket</h1>;
// };

// root.render(
//   <>
//     <Navbar theme='dark' />
//     <Navbar theme='light' />
//   </>
// );

// UI Kit > Button
//
// root.render(
//   <>
//     <Button tabIndex={1} disabled>
//       Login
//     </Button>
//     <Button tabIndex={2} disabled={false}>
//       Login
//     </Button>
//   </>
// );
