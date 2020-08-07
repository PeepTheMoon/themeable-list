import React from 'react';
import Header from '../header/Header';
import CharacterList from '../character/CharacterList';
import { usePage } from '../../hooks/appContext';
import Pagination from '../pagination/Pagination';

export default function App() {
  const page = usePage();

  return (
    <>
      <Header />
      <Pagination page={page} />
      <CharacterList />
    </>
  );
}
