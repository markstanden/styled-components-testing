import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = styled.input<InputProps>`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  font-family: 'open-sans';
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
`;
