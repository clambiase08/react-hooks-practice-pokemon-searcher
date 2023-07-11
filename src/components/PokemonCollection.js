import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {


  const renderPokemon = pokemon.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>{renderPokemon}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
