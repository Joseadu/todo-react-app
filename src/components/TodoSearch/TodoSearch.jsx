import React from 'react';
import { FaSearch } from "react-icons/fa";

import './TodoSearch.css'

export function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className='todo-search'>
      <input
        className='todo-search-input'
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <FaSearch className='todo-search-icon'/>
    </div>
    
  );
}