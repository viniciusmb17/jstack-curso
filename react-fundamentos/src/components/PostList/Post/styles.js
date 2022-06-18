import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.currentTheme.postBackgroundColor};
    border-radius: ${theme.currentTheme.borderRadius};
    padding: ${`${theme.currentTheme.spacing.medium}px`};
    h2 {
      margin: 0 0 ${`${theme.currentTheme.spacing.small}px`};
    }
    & + article {
      margin-top: ${`${theme.currentTheme.spacing.small}px`};
    }
  `};
  display: flex;
  flex-direction: column;
  small {
    opacity: 0.7;
  }
`;
