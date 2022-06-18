import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useLocalState('dark');

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }
  return (
    <ThemeProvider theme={{ currentTheme, handleToggleTheme, theme }}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;

function useLocalState(key, initialValue = '') {
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      // Se houver algo salvo, retorna ...
      return JSON.parse(storedData);
    }

    // Se não houver nada salvo, retorna initialValue ...
    return initialValue;
  });

  useEffect(() => {
    // Toda vez que state for alterado, salva no localStorage ...
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  // Deixamos o state e o setState acessíveis para quem for usar este hook...
  return [state, setState];
}
