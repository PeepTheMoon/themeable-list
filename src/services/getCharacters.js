export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(({ info, results: characters }) => ({
      count: info.count,
      characters: characters.map(character => ({
        name: character.name,
        status: character.status,
        species: character.species,
        image: character.image
      }))
    }));
};
