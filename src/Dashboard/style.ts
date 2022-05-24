import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 1rem;

  .card {
    width: calc(100%/2);
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
`;