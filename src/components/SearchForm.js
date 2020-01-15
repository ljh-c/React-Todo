import React from 'react';

const SearchForm = ({ query, handleQueryChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search tasks"
        value={query}
        onChange={handleQueryChange}
        className="search"
      />
    </>
  );
};

export default SearchForm;