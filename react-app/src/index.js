import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import EmailForm from './EmailForm';
import NameForm from './NameForm';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const root = createRoot(document.querySelector('#root'));

// Refactoring form 1
//
// const App = () => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = ({ target: { value } }) => {
//     setEmail(value);
//   };

//   return (
//     <>
//       <h2>Loged in as {email}</h2>
//       <EmailForm email={email} onEmailChange={handleEmailChange} />
//     </>
//   );
// };
// root.render(<App />);

// Refactoring Form 2
//
// function App() {
//   const [name, setName] = useState('');

//   const handleNameChange = ({ target: { value } }) => {
//     setName(value);
//   };

//   return (
//     <>
//       <h2>Hello {name}</h2>
//       <NameForm name={name} onNameChange={handleNameChange} />
//     </>
//   );
// }
// root.render(<App />);

// Todo App
//
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [entry, setEntry] = useState('');

  const handleTodoChange = e => {
    setEntry(e.target.value);
  };

  const handleTodoSubmit = e => {
    e.preventDefault();
    setTodos([...todos, entry]);
    setEntry('');
  };

  return (
    <>
      <TodoForm
        todo={entry}
        onTodoChange={handleTodoChange}
        onTodoSubmit={handleTodoSubmit}
      />
      <TodoList todos={todos} />
    </>
  );
}
root.render(<TodoApp />);
