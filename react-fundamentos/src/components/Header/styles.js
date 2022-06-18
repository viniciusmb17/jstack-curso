import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.currentTheme.headerBackgroundColor};
    padding: 0 ${`${theme.currentTheme.spacing.large}px`};
    border-radius: ${theme.currentTheme.borderRadius};
  `};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: ${({ theme }) => `${theme.currentTheme.spacing.medium}px`};
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
