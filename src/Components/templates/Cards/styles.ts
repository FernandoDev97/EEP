import styled from "styled-components"

export const InfosContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
export const CodeItem = styled.pre`
    background: ${(props) => props.theme.gradient};
    padding: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: #FFF;
    width: 26rem;
    align-self: flex-start;
    transition: 1s !important;

    @media(max-width: 1450px) {
        width: 21rem;
        padding: 1.5rem;
        font-size: 0.8rem;
    }

    @media(max-width: 1000px) {
        width: 100%;
    }

    @media(max-width: 700px) {
        width: 100%;
        font-size: 0.9rem;
        
    }

    @media(max-width: 450px) {
        width: 100%;
        padding: 0.2rem;
        font-size: 0.7rem;
    }

    @media(max-width: 350px) {
        width: 100%;
        padding: 0.2rem;
        font-size: 0.6rem;
    }

    &:hover {
        filter: brightness(1.2);
    }

    &:last-child {
        align-self: flex-end;
    }

    > div {
        margin: 0.2rem;
        margin-left: 1rem;
    }

    span.purple {
        color: #c38cdd;
    }

    span.blue {
        color: #293462;

    }

    span.comment {
        color: #F73D93;
        margin-bottom: 1rem;
        display: block;
    }
`