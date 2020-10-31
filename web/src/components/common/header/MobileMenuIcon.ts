import styled from 'styled-components';

export const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background: black;
    margin: 6px 0;
    width: 100%;
    border: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
