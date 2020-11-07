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

const largeStyles = ({ large }: ButtonProps<MyThemeProps>) => {
  if (large) {
    return css`
      padding: 12px;
      border-radius: 5px;
      font-size: 1.5rem;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1rem;
    `;
  }
};

const Button = styled.button<ButtonProps>`
  color: white;
  background: ${(p: ButtonProps<MyThemeProps>) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  ${largeStyles}
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
