import styled from 'styled-components';

interface ProjectProps {
    imgUrl: string
}

export const ProjectContainer = styled.div<ProjectProps>`
    width: 100%;
    display: flex;
    height: 25rem;
    align-items: flex-end;
    position: relative;

    > section {
        width: 50rem;
        height: 100%;
        background: url(${props => props.imgUrl}) no-repeat center;
        background-size: cover;
        position: relative;

        > div.overlay {
            position: absolute; 
            width: 100%;
            height: 100%;
            background: ${(props) => props.theme.gradient2};
            opacity: 0.75;
            transition: 0.5s;
        } 

        > div.text {
            position: absolute;
            top: 3rem;
            right: -10rem;
            transition: 0.5s;
            width: fit-content;

            h1 {
                color: ${(props) => props.theme.primary};
                font-size: 2.5rem;
                text-shadow: -4px 5px 22px #11172b;
            }

            h2 {
                color: ${(props) => props.theme.primary};
                font-size: 2rem;
                font-weight: 300;
                text-shadow: -4px 5px 22px #11172b;
            }
        }
    }

    > button {
        height: 4rem;
        margin: 0 0 3rem 5rem;
        background: none;
        border: none;

        > a {
            color: #0AA1DD;
            font-size: 2rem;
            font-weight: 300;
            display: flex;
            align-items: center;
            gap: .8rem;
            transition: .5s;
        }
    }

    &:hover {
        > section {
            > div.text {
                right: -12rem;
            }

            > div.overlay {
                opacity: .4;
            }
        }

        > button  {
            a {
                color: #79DAE8;
            }
        }
    }

    &:nth-child(even) {
        flex-direction: row-reverse;

        > button {
            margin: 3rem 5rem 0 0;
        }

        > section > div.text {
            text-align: right;
            right: 0;
            left: -10rem;
        }

        &:hover {
            > section > div.text {
                left: -12rem;
            }
        }
    }

    @media(max-width: 1450px) {
        > section {
            width: 40rem;
        }
    }

    @media(max-width: 1000px) {
        > section {
            width: 100%;

            > div.text {
                left: 1rem;
                top: 1rem;
            }
        }

        > button {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            margin: 0;
        }

        &:nth-child(even) {
            flex-direction: row;

            > section {
                width: 100%;

                > div.text {
                    left: 1rem;
                    top: 1rem;
                    text-align: left;
                }
            }

            > button {
                position: absolute;
                bottom: 1rem;
                right: 1rem;
                margin: 0;
            }

            &:hover{
                > section > div.text {
                    left: 1rem;
                }
            }
        }
    }

    @media(max-width: 700px) {
        height: 17rem;
    }

    @media(max-width: 450px) {
        > button {
            height: auto;

            a{
                font-size: 1.5rem;
                gap: 0.8rem;
            }
        }

        > section > div.text {
           h1 {
               font-size: 1.5rem;
           } 

           h2 {
               font-size: 1rem;
           }
        }
    }
`
