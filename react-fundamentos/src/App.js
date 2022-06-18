import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

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
