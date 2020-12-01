/* eslint-disable */
import React, { useContext } from 'react';
import {ThemeContext} from '../../../providers/Theme/ThemeProvider';
import './Toogle.styles.css';

const Toggle = () => {

  const theme = useContext(ThemeContext)

  const changeTheme = (e) => {
    theme.setTheme(e.target.checked);
  };


  return (
    <label className="switch">
      <input type="checkbox" onChange={changeTheme}/>
      <span className="slider round"></span>
    </label>
  );
};

export default Toggle;

