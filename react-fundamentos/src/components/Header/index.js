import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Container } from './styles';

export default function Header() {
  const context = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={context.handleToggleTheme}
      >
        {context.theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
