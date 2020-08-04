import React from 'react';
import Header from '../header/Header';
import CharacterList from '../character/CharacterList';
// import { useCount } from '../../hooks/appContext';
// import Pagination from '../pagination/Pagination';

export default function App() {
  // const count = useCount();

  return (
    <>
      <Header />
      {/* <Pagination count={count} /> */}
      <CharacterList />
    </>
  );
}
