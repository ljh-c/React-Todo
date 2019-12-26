import React from 'react';
import Todo from './Todo';

export default function TodoList({ tasks, toggleComplete }) {
  return (
    <div className="todo-list">
      {tasks.map(todo => {
        return (
          <Todo key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
          />
        );
      })}
    </div>
  );
}