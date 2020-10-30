import styled from 'styled-components';

export interface MenuProps {
  open: boolean;
}

export const Menu = styled.nav<MenuProps>`
  display: ${(p) => (p.open ? 'block' : 'none')};
  font-family: 'open sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: white;

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
