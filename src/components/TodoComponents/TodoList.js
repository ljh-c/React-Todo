import React from 'react';
import Todo from './Todo';

export default function TodoList({ tasks, toggleComplete, filteredTasks, query }) {
  const displayTasks = query === '' ? tasks : filteredTasks;
  console.log(filteredTasks);
  return (
    <div className="todo-list">
      {displayTasks.map(todo => {
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