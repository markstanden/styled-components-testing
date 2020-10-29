import styled, { css } from 'styled-components';

interface ButtonProps {
  /** Displays a button with the secondary colours */
  secondary?: boolean;
  /** Displays a huge button */
  large?: boolean;
}

const Button = styled.button`
  color: white;
  background: ${(p: ButtonProps) => (p.secondary ? 'black' : '#f8049c')};
  font-weight: bold;
  ${(p: ButtonProps) =>
    p.large
      ? css`
          padding: 5rem;
          border-radius: 2rem;
          font-size: 4rem;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 2rem;
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
