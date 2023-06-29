import styled from '@emotion/styled';
import { ButtonStyled } from 'components/common/Button/Button.styled';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  width: max-content;
`;

export const UserMenuButton = styled(ButtonStyled)`
  margin-top: 0;
  background-color: #1e8aff;

  &:hover,
  &:focus {
    background-color: #0052ab;
  }
`;

export const UserEmail = styled.p`
  font-weight: 500;
  margin: 0;
`;
