import React from 'react';

const SearchForm = ({ query, handleQueryChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search tasks"
        value={query}
        onChange={handleQueryChange}
      />
    </>
  );
};

export default SearchForm;