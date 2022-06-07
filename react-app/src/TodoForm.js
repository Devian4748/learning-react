import { useState } from 'react';

const TodoForm = ({ todo, onTodoChange, onTodoSubmit }) => {
  return (
    <form onSubmit={onTodoSubmit}>
      <label htmlFor='todo'>Enter To do: </label>
      <input
        type='text'
        name='todo'
        id='todo'
        value={todo}
        onChange={onTodoChange}
      />
      <input type='submit' value='Add todo' />
    </form>
  );
};

export default TodoForm;
