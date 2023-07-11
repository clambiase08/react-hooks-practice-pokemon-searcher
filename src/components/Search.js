import React from "react";

function Search({query, setQuery, pokemon}) {

  function handleSearch(e) {
    const results = pokemon.filter((pokemon) => {
      if (e.target.value === "") {
        return pokemon
      } else {
        return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
      }
    })
    setQuery({
      query: e.target.value,
      pokemon: results
    })
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
