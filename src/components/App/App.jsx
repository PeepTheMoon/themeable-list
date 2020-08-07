import React from 'react';
import Header from '../header/Header';
import CharacterList from '../character/CharacterList';
import Pagination from '../pagination/Pagination';

export default function App() {

  return (
    <>
      <Header />
      <Pagination />
      <CharacterList />
    </>
  );
}
