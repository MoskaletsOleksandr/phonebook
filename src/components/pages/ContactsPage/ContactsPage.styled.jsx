import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
