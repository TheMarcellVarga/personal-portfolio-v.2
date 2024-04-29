// app/contexts/ThemeContext.tsx

import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
 theme: Theme;
 toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
 theme: 'light',
 toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
 const [theme, setTheme] = useState<Theme>('light');

 const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
 };

 return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
 );
};

export const useTheme = () => useContext(ThemeContext);