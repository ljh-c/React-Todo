import React from 'react';
import Todo from './Todo';

export default function TodoList({ tasks, toggleComplete, query }) {
  const displayedTasks = tasks.filter(todo => todo.task.toLowerCase().includes(query.toLowerCase()));
  
  return (
    <div className="todo-list">
      {displayedTasks.map(todo => {
        return (
          <Todo key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            query={query}
          />
        );
      })}
    </div>
  );
}