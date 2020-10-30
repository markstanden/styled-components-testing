import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  HeaderWrapper,
  Menu,
  MobileMenuIcon,
  StyledLink,
} from './header/index';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <MobileMenuIcon
        onClick={() => {
          setMenuOpen((s) => !s);
        }}
      >
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
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
