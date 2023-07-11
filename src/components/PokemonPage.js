import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState({
    query: "",
    pokemon: []
  })

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((pokemonData) => setPokemon(pokemonData));
  }, []);

  const searchedPokemon = pokemon.filter((pokemon) => pokemon.name.includes(query.query))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search query={query} setQuery={setQuery} pokemon={pokemon} />
      <br />
      <PokemonCollection pokemon={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;
