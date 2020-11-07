import styled from 'styled-components';
import { Button, Input } from '../../common';

interface FormProps {}

export const Form = styled.form<FormProps>`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  > ${Button}:first-of-type {
    margin-top: 40px;
  }

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
  > ${Input} {
    margin-top: 20px;
  }
`;
