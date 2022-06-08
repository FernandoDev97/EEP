import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    border-bottom: 3px solid ${(props) => props.theme.primary};
    padding-bottom: 5rem;

    > img {
        width: 38rem;
        border-radius: 50%;
        position: relative;
    }

    > div {
        flex: 4;
    }

    @media(max-width: 1450px) {
        > img {
            width: 30rem;
        }

        > div {
            flex: 1;
        }
    }

    @media(max-width: 1000px) {
        > img {
            width: 22rem;
        }

        > div {
            flex: 1;
        }
    }

    @media(max-width: 700px) {
        flex-direction: column-reverse;

        > img {
          display: none;
        }
        
        > div {
            width: 100%;
        }
    }
`;

export const TextContainer = styled.section `
    margin-bottom: 2rem;
    width: 100%;

    h1 {
        font-size: 7rem;
        color: ${(props) => props.theme.primary};
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 400;
        color: ${(props) => props.theme.secondary};
    }

    @media(max-width: 1450px) {
        h1 {
            font-size: 5rem;
        }

        h2 {
            font-size: 2rem;
        }
    }

    @media(max-width: 1000px) {
        h1 {
            font-size: 3rem;
            text-align: center;
        }

        h2 {
            font-size: 1.5rem;
            text-align: center;
        }
    }
`

