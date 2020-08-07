import React from 'react';
import { useCharacters } from '../../hooks/appContext';

const CharacterList = () => {
  const characters = useCharacters();

  if(!characters) return <h1>Loading Rick and Morty Characters...</h1>;

  return characters.map((character, i) => (
    <figure key={i}>
      <img src={character.image} alt={character.name} />

      <h3>{character.name}</h3>

      <figcaption>{character.status} - {character.species}</figcaption>
    </figure>
  ));
};

export default CharacterList;
