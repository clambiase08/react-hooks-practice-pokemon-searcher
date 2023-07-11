import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [sprite, setSprite] = useState("front");

  function toggleSprite() {
    setSprite((sprite) => !sprite);
  }

  const spriteDisplay = sprite ? pokemon.sprites.front : pokemon.sprites.back;

  return (
    <Card>
      <div onClick={toggleSprite}>
        <div className="image">
          <img src={spriteDisplay} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
