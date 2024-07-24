import styled, { keyframes } from "styled-components"

export const PokebolaAnimate = keyframes`
    0% {
        transform: translateY(0);
        
    }
    100% {
        transform: translateY(-5px);   
    }
`;

export const MenuContainer = styled.header`
    padding: 30px 30px;
    width: 100vw;
    background-color: #721919;   
    height: 120px;

    img:first-child{
        max-width: 320px;

        @media(max-width: 800px){
            max-width: 220px;
        }

        @media (max-width: 600px) {
            max-width: 180px;
        }
    }

    img:last-child{
        width: 55px;
        animation: ${PokebolaAnimate} 0.6s alternate infinite;

        @media(max-width: 800px){
            max-width: 40px;
        }

        @media (max-width: 800px) {
            max-width: 30px;
        }

        @media (max-width: 400px) {
            max-width: 20px;
        }        
    }
`

export const ThemeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 50px;

    img{
        width: 25px;
        height: 25px;        
    }

    @media (max-width: 800px) {
        margin: 0;
    }
`

export const LogoContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const PokeballContainer = styled.div`
    width: fit-content;
    position: absolute;
    top: 40px;

    @media (max-width: 800px) {
        top: 65px;
    }
    
    @media (max-width: 600px) {
        top: 75px;
    }
`