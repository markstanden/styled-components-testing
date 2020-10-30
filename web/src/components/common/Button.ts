import styled, { css } from 'styled-components';

interface ButtonProps {
  /** Displays a button with the secondary colours */
  secondary?: boolean;
  /** Displays a huge button */
  large?: boolean;
}

const Button = styled.button`
  color: white;
  background: ${(p: ButtonProps) => (p.secondary ? '#fdd54f' : '#f8049c')};
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
