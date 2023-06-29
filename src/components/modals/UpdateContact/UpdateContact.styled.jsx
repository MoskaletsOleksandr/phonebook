import styled from '@emotion/styled';
import { ButtonStyled } from 'components/common/Button/Button.styled';

export const ContentWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const ContactInfo = styled.p`
  margin-bottom: 0.5rem;

  b {
    font-weight: bold;
  }
`;

export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const DeclineButton = styled(ButtonStyled)`
  background-color: #ff0000;

  &:hover,
  &:focus {
    background-color: #cc0000;
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
    box-shadow: ${({ disabled }) =>
      disabled
        ? '0px 2px 4px rgba(0, 0, 0, 0.2)'
        : '0px 4px 6px rgba(0, 0, 0, 0.3)'};
  }
`;
