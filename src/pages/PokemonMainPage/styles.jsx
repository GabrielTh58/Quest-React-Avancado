import styled, { keyframes } from 'styled-components';
import { PokebolaAnimate } from '../../components/menu/styles';

export const movePokemonAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY( -2px);
    }
`

const buttonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`

export const Filter = styled.div`
    width: 1440px;
    margin: 0 auto;
    text-align: start;
    padding-top: 30px;

    div{
        padding-left: 20px;
    }

    span{
        font-weight: 400;
    }

    select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            outline: none;
            width: 200px;
            padding: 10px;
            font-size: 15px;
            color: #333;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-transform: capitalize;
            
               option {
                background-color: #fff;
                color: #333;
                padding: 10px;
                font-size: 15px;
                border: none;
                cursor: pointer;
            }
        }

        select:focus {
            border-color: #721919;
        }      
    
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
`;

export const ContentContainer = styled.div`
    flex: 1; 
    overflow: auto;
`;


export const PokemonListContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;   
    padding-top: 50px;

    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-auto-rows: 1fr;
        gap: 20px;
        text-transform: capitalize;
        place-items: center
    }
`

export const PokemonList = styled.li`
    width: 200px;
    padding: 20px 0px;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
    border-radius: 10px;
    text-align: center;
    transition: 0.3s ease-in-out;
    background-color: ${props => props.$typeColor};
  

    img{
        margin: 0 auto;
        animation: ${movePokemonAnimation} 0.8s ease-in-out infinite alternate;
    } 

    &:hover{
        transform: translate(0, -7px);
    }
`

export const PokemonId = styled.div`
    width: fit-content;
    border-radius: 20%;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.5px;
    color: #000;
    text-align: start;
    margin: 0 0 10px 20px;
    padding: 2px 5px;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
   
  
`

export const PokemonName = styled.h2`
    font-size: 20px;
    color: ${props => props.theme.color};
    font-weight: 700;
`

export const LoadMorePokemonButton = styled.button`
    display: flex;
    align-items: center;
    margin: 50px 0;
    margin-inline: auto;
    padding: 15px 30px;
    border: none;
    border-radius: 15px;
    color: white;
    background-color: #721919;
    cursor: pointer;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
    transition: 0.3s ease-in-out;
    animation: ${buttonAnimation} 0.8s ease-in-out infinite alternate;

    &:hover{
        opacity: 1;
        transform: scale(1.1,1.1);

        img{
            animation: ${PokebolaAnimate} 0.5s alternate infinite;
        }
    }

    img{
        width: 25px;
        height: 25px;
        margin-left: 5px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.6);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: 0 auto 40px auto;

    img{
        max-width: 90%;
    }
`
