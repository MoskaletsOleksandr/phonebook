import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenuStyled = styled.div`
  display: flex;
  gap: 12px;
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
