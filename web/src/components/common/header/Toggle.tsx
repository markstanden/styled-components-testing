import React, { FunctionComponent } from 'react';
import { MyThemeProps } from '../../themes/MyThemeProps';
import styled from 'styled-components';

export interface ToggleWrapperProps<T = {}> {
  theme?: T;
}

const ToggleWrapper = styled.div<ToggleWrapperProps<MyThemeProps>>`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background-image: linear-gradient(
    to bottom,
    ${p => p.theme.primaryColor},
    ${p => p.theme.secondaryColor}
  );
`;

export interface NotchProps<T = {}> {
  isActive?: boolean;
  theme?: T;
}

const Notch = styled.div<NotchProps<MyThemeProps>>`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${p => (p.isActive ? '26px' : '1px')});
`;

export interface ToggleProps<T = {}> {
  isActive?: boolean;
  onToggle: () => {};
  theme?: T;
}

export const Toggle: FunctionComponent<ToggleProps<MyThemeProps>> = ({
  isActive,
  onToggle,
}) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive}></Notch>
    </ToggleWrapper>
  );
};
