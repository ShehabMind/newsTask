/* eslint-disable prettier/prettier */
//import liraries
import {StatusBar} from 'react-native';
import React, {useContext, useState} from 'react';

// create a component

export const ThemeContext = React.createContext();
export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('Light');

  const toggleTheme = () => {
    if (theme === 'Light') {
      setTheme('Dark');
      StatusBar.setBarStyle('light-content');
    } else {
      setTheme('Light');
      StatusBar.setBarStyle('dark-content');
    }
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
