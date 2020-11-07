import styled from 'styled-components';
import { MyThemeProps } from '../../themes/MyThemeProps';

export interface MenuProps<T> {
  open: boolean;
  theme: T;
}

export const Menu = styled.nav<MenuProps<MyThemeProps>>`
  display: ${p => (p.open ? 'block' : 'none')};
  font-family: 'open sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${p => p.theme.secondaryColor};
  background: ${p => p.theme.bodyBackgroundColor};

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    background: none;
    left: initial;
    top: initial;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto; //shifts the flex container to the right
  }
`;
