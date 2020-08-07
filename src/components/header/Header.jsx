import React, { useEffect } from 'react';
import { useDispatch, useTheme } from '../../hooks/appContext';
import styles from './Header.css';

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  useEffect(() => {
    document.body.style = `background-color: var(--${theme}-bg-color); color: var(--${theme}-fg-color)`;
  }, [theme]);

  return (
    <div className={styles.Header}>
      Rick and Morty Characters, the Basics
      <label className={styles.switch}>
        <input id="toggle" type="checkbox" name="theme" checked={theme === 'light'} onChange={handleChange} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default Header;
