import React from 'react'

export function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value)
  }

  return (
    <input
        placeholder="Buscar TODO"
        value={searchValue}
        onChange={onSearchValueChange}
    />
  );
}