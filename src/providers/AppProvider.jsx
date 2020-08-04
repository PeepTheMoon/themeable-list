import React, { useReducer } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { useEffect } from 'react';
import { getCharacters } from '../services/getCharacters';

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // getCharacters(state.count)
    getCharacters()
      .then(characters => dispatch({ type: 'SET_CHARACTERS', payload: characters }));
  }, []);
  // [state.count]

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
