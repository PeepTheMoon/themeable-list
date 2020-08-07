import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useCharacters = () => {
  const { state } = useContext(AppContext);
  return state.characters;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useTheme = () => {
  const { state } = useContext(AppContext);
  return state.theme;
};

export const usePage = () => {
  const { state } = useContext(AppContext);
  return state.page;
};
