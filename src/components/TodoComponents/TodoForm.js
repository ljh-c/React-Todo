import React from 'react';

export default function TodoForm({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add new task" onChange={handleChange} />
      <button type="submit">&#43;</button>
    </form>
  );
}