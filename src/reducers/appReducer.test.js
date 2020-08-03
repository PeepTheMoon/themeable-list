import reducer from './appReducer';

describe('app reducer', () => {
  it('sets characters list with the SET_CHARACTERS action type', () => {
    const state = {
      characters: []
    };

    const action = {
      type: 'SET_CHARACTERS',
      payload: [
        {
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        }
      ]
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      characters: [
        {
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        }
      ]
    });
  });

  it('toggles the theme from light to dark', () => {
    const state = {
      theme: 'light'
    };

    const action = {
      type: 'TOGGLE_THEME'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'dark'
    });
  });
  
});
