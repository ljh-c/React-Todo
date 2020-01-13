import React from 'react';

export default function TodoForm({ newTask, handleChange, handleSubmit, handleClick, clearAllTasks }) {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add new task"
        value={newTask} 
        onChange={handleChange} />
      <button type="submit">&#43;</button>
    </form>
    <button onClick={handleClick}>Clear completed tasks</button>
    <button onClick={clearAllTasks}>Clear ALL tasks</button>
    </>
  );
}