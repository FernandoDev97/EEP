import { darken } from 'polished';
import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 5rem;

   > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media(max-width: 1000px) {
        gap: 2rem;
    }
   }

   > button {
       background: ${(props) => props.theme.primary};
       padding: 0.8rem 3rem;
       border-radius: 0.5rem;
       border: none;
       transition: 0.5s;

       &:hover {
           background: ${(props) => darken(0.05, theme.primary)};
       }

       a {
           text-transform: uppercase;
           color: #FFF;
           font-size: 1.5rem;
           font-weight: 300;
       }

       @media(max-width: 500px) {
           padding: 1rem;

           a {
               font-size: 0.8rem;
           }
       }
   }
`
