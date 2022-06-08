import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10rem;
    border-top: 1px solid ${(props) => props.theme.backgroundLight};
    height: 5rem;
    justify-content: center;
    align-items: center;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: none;
            border: none;
            color: ${({theme}) => theme.secondary};
            text-transform: uppercase;
            font-weight: 300;
            font-size: 1.3rem;
            transition: 0.5s;

            &:hover {
                color: ${({theme}) => theme.primary};
            }
        }

        section {
            display: flex;
            align-items: center;
            gap: 1rem;

            svg {
                width: 2rem;
                height: 2rem;
                color: ${({theme}) => theme.secondary};
                transition: 0.5s;
                cursor: pointer;

                &:hover{
                    color: ${({theme}) => theme.primary};
                }
            }
        }

        @media(max-width: 450px) {
            button {
                font-size: 0.9rem;
            }

            > section {
                gap: 0.5rem;

                svg {
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
    }
`;
