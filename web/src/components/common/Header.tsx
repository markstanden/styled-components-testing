import { themeID } from '../themes/themeID';
import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import {
  HeaderWrapper,
  Menu,
  MobileMenuIcon,
  StyledLink,
  Toggle,
} from './header/index';

export const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { ID, switchTheme } = useContext(ThemeContext);

  console.log(switchTheme);

  return (
    <HeaderWrapper>
      <MobileMenuIcon
        onClick={() => {
          setMenuOpen(s => !s);
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
        <Toggle onToggle={switchTheme} isActive={ID === themeID.dark} />
      </Menu>
    </HeaderWrapper>
  );
};
