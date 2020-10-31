import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Input, InputProps } from './index';

interface PasswordInputProps extends InputProps {
  type?: string;
  placeholder?: string;
}

const PasswordInputStyled = styled(Input).attrs<PasswordInputProps>(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

export const PasswordInput: FunctionComponent<PasswordInputProps> = ({
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? value : ''}</div>
    </>
  );
};
