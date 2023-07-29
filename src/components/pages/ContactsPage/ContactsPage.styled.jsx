import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
