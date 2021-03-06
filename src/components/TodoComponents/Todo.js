import React from 'react';
import './Todo.css';

export default function Todo({ todo, toggleComplete, query }) {
  return (
    <div 
      className={todo.completed ? "completed" : null}
      onClick={() => toggleComplete(todo.id)}
    >
      <p>{todo.task}</p>
    </div>
  );
}