import React from 'react';
import styled from 'styled-components';
import {
  Link as ReactRouterDOMLink,
  LinkProps,
  useLocation,
} from 'react-router-dom';

export interface StyledLinkProps extends LinkProps {
  isActive?: boolean;
}

const Link = ({ isActive, children, ...props }: StyledLinkProps) => {
  return <ReactRouterDOMLink {...props}>{children}</ReactRouterDOMLink>;
};

export const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0 auto 0;
  /* Had some fun with this one.  To destructure the props, you must put both sides of the arrow in brackets. */
  /* this compiles ok: */
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${p => p.theme.bodyFontColor};
`;
