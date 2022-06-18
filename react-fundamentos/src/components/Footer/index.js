import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Container } from './sytles';

export default function Footer() {
  const context = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={context.handleToggleTheme}
      >
        {context.theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
