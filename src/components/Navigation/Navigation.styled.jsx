import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled.nav`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #fff;
    background-color: #32ca32;
  }
`;
