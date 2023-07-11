import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleHpChange(e) {
    setHp(e.target.value);
  }

  function handleFrontUrlChange(e) {
    setFrontUrl(e.target.value);
  }

  function handleBackUrlChange(e) {
    setBackUrl(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const pokemonData = {
      name: name,
      hp: parseInt(hp),
      sprites: {
        front: frontUrl,
        back: backUrl,
      },
    };
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonData),
    })
    onAddPokemon(pokemonData);
    setName("");
    setHp("");
    setFrontUrl("");
    setBackUrl("");
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={handleHpChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={handleFrontUrlChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={handleBackUrlChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
