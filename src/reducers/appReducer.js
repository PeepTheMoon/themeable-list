export const initialState = {
  characters: [],
  theme: 'light',
  page: 1,
  maxPage: 0
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'INCREMENT':
      return { ...state, page: state.page + 1 };
    case 'DECREMENT':
      return { ...state, page: state.page - 1 };
    case 'SET_PAGE':
      return { ...state, maxPage: action.payload };
    default:
      return state;
  }
}
