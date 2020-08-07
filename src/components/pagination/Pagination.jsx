import React from 'react';
import { useDispatch, usePage } from '../../hooks/appContext';

const Pagination = () => {
  const { maxPage, page } = usePage();
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT' });

  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <section>
      <button disabled={page === 1} onClick={decrement}>&lt;</button>
      <span>{page} / {maxPage}</span>
      <button disabled={page === maxPage} onClick={increment}>&gt;</button>
    </section>
  );
};

export default Pagination;
