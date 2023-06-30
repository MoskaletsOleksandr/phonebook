import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  flex-basis: 33%;
  padding: 20px;
  border-radius: 4px;
  background-color: rgba(245, 245, 245, 0.9);
  text-align: center;

  &:nth-of-type(2) {
    flex-basis: 66%;
  }
`;
