import React from 'react';
import './Todo.css';

export default function Todo({ todo, toggleComplete }) {
  return (
    <div 
      className={todo.completed ? "completed" : null}
      onClick={event => toggleComplete(todo.id)}
    >
      {todo.task}
    </div>
  );
}