import React from 'react';

export default function TodoList({ tasks }) {
  return (
    <>
      {tasks.map(todo => <p key={todo.id}>{todo.task}</p>)}
    </>
  );
}