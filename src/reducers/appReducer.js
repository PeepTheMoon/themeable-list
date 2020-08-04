export const initialState = {
  characters: [],
  theme: 'light',
  count: 1
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
