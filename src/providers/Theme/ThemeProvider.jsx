import React, {useState} from 'react';

export const ThemeContext = React.createContext()

const ThemeProvider = ({children}) => {
  const theme = {
    light: {
      backgroundColor: '#e4e4e4',
    },
    dark: {
      backgroundColor: '#202020',
    }
  }

  const [selectedTheme, setSelectedTheme] = useState(theme.light)

  const setTheme = (option) => {
    setSelectedTheme(option ? theme.dark : theme.light);
  }

  return (
    <ThemeContext.Provider value={{ theme: selectedTheme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

