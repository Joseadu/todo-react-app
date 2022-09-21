import React from 'react'

export function TodoSearch(props) {
  const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value)
  }

  return [

    <input
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ];
}