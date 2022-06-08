import styled from 'styled-components';

export const KnowledgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    p {
        color: ${(props) => props.theme.primary};
        font-weight: 300;
        font-size: 1rem;
        text-transform: uppercase;
    }

    img {
        width: 400px;
        height: 400px;
        color: ${(props) => props.theme.secondary};
        transition: 0.3s;
    }

    &:hover {
        img{
            color: ${(props) => props.theme.primary};
            transform: scale(1.2);
        }
    }

    @media(max-width: 1450px) {
        svg {
            width: 4.0rem;
            height: 4.0rem;
        }
    }

    @media(max-width: 1200px) {
        svg {
            width: 3.5rem;
            height: 3.5rem;
        }
    }

    @media(max-width: 1000px) {
        gap: .5rem;
        p {
            font-size: 1rem;
        }

        svg {
            width: 4rem;
            height: 4rem;
        }
    }

    @media(max-width: 700px) {
        p {
            font-size: 0.7rem;
        }

        svg {
            width: 3.0rem;
            height: 3.0rem;
        }
    }

    @media(max-width: 450px) {
        p {
            font-size: 0.6rem;
        }

        svg {
            width: 2rem;
            height: 2rem;
        }
    }
    
`;
