import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// Impure to Pure
const user = {
  first_name: 'Sam',
  last_name: 'Doe',
  age: 26,
};

const Navbar = props => {
  const { user } = props;
  const full_name = `${user.first_name} ${user.last_name}`;
  const age = user.age + 1;
  return (
    <div>
      Hello {full_name}.<br />
      You are now {age} years old.
    </div>
  );
};

root.render(<Navbar user={user} />);
