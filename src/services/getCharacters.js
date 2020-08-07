export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(({ info, results: characters }) => ({
      page: info.pages,
      characters: characters.map(character => ({
        name: character.name,
        status: character.status,
        species: character.species,
        image: character.image
      }))
    }));
};
