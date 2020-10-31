import styled, { css } from 'styled-components';
import { MyThemeProps } from '../themes/MyThemeProps';

interface ButtonProps<T = {}> {
  /** Displays a button with the secondary colours */
  secondary?: boolean;
  /** Displays a huge button */
  large?: boolean;
  /** ThemeProvider adds a theme object to the props.
   * Defaulted to an empty object so that type calls to ButtonProps that
   * don't need theming don't need the added generic type*/
  theme: T;
}

const Button = styled.button<ButtonProps>`
  color: white;
  background: ${(p: ButtonProps<MyThemeProps>) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  ${(p: ButtonProps) =>
    p.large
      ? css`
          padding: 12px;
          border-radius: 5px;
          font-size: 1.5rem;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1rem;
        `}

  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
