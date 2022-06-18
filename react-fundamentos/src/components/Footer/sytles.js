import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.currentTheme.footerBackgroundColor};
    border-radius: ${theme.currentTheme.borderRadius};
    padding: 0 ${`${theme.currentTheme.spacing.large}px`};
    margin-top: ${`${theme.currentTheme.spacing.large}px`};
  `};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
