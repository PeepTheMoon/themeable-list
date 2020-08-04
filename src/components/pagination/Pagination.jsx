import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../hooks/appContext';

const Pagination = ({ count }) => {
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT' });

  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <section>
      <span>Page: {count}</span>
      <button onClick={decrement}>Previous</button>
      <button onClick={increment}>Next</button>
    </section>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired
};

export default Pagination;
