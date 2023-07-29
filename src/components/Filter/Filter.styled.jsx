import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: inset 0px 0px 8px 0px #33333347;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
