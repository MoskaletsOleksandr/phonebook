import styled from '@emotion/styled';

export const ContactItem = styled.li``;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContactName = styled.span`
  text-align: start;
  display: block;
  font-weight: bold;
  margin-right: 5px;
  word-break: break-all;

  @media (min-width: 767px) {
    width: 50%;
  }
`;

export const ContactNumber = styled.span`
  display: block;
  color: #666;
  margin-right: 10px;
  word-break: break-all;
`;

export const DeleteButton = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.disabled ? '#ccc' : '#cc3333')};
  color: #fff;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${props => (props.disabled ? '#ccc' : '#b32828')};
    outline: none;
    transform: ${props => (props.disabled ? 'none' : 'scale(1.05)')};
    box-shadow: ${props =>
      props.disabled ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.3)'};
  }
`;
