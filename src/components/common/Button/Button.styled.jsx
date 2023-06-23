import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  transition: transform 0.3s ease-in-out;
  height: 32px;
  width: 150px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#33cc33')};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover,
  &:focus {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#2faa2f')};
    outline: none;
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
    box-shadow: ${({ disabled }) =>
      disabled
        ? '0px 2px 4px rgba(0, 0, 0, 0.2)'
        : '0px 4px 6px rgba(0, 0, 0, 0.3)'};
  }
`;
