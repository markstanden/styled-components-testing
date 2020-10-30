import React from 'react';
import styled from 'styled-components';
import {
  Link as ReactRouterDOMLink,
  LinkProps,
  useLocation,
} from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;

const Menu = styled.nav`
  display: block;
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

export interface StyledLinkProps extends LinkProps {
  isActive?: boolean;
}

export const Link = ({ isActive, children, ...props }: StyledLinkProps) => {
  return <ReactRouterDOMLink {...props}>{children}</ReactRouterDOMLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0 auto 0;
  /* Had some fun with this one.  To destructure the props, you must put both sides of the arrow in brackets. */
  /* this compiles ok: */
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: black;
`;

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};
