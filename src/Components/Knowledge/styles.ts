import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > section {
      margin-top: 8rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      @media(max-width: 1450px) {
          gap: 4.5rem;
      }

      @media(max-width: 1200px) {
          gap: 3rem;
      }

      @media(max-width: 1000px) {
          gap: 4rem;
          grid-template-columns: repeat(2, 1fr);
      }

      @media(max-width: 700px) {
          gap: 2rem;
          margin-top: 5rem;
          grid-template-columns: repeat(1, 1fr);
      }

      @media(max-width: 450px) {
          gap: 2rem;
          margin-top: 4rem;
      }
    }
`;
