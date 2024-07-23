import styled from 'styled-components';
import { movePokemonAnimation } from '../PokemonMainPage/styles';

export const Container = styled.section`
    width: 100vw;
    min-height: 100vh;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionContainer = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
`

export const PokemonCard = styled.div`
    border-radius: 15px;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
    transition: 0.3s ease-in-out;
    text-align: center;
    width: 500px;
    margin-top: 150px;
    text-transform: capitalize;

    &:hover{
        transform: translate(0, -7px);
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px 0 30px;

    h1{
        font-size: 23px;
        font-weight: 700;
        text-transform: capitalize;
    }

    ul{
        display: flex;
        gap: 5px;
    }
`

export  const TypeListItem = styled.li`
    padding: 3px 10px;
    border-radius: 5px;
    font-size: 12px;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
    text-transform: capitalize;
    font-weight: 400;
`

export const ImageContainer = styled.div`
    img{
        width: 30%;
        margin-bottom: 20px;
        animation: ${movePokemonAnimation} 0.8s ease-in-out infinite alternate;
    }
`

export const PokemonDetailsContainer = styled.div`
    padding: 90px 0;
    margin-top: -95px;
    background: ${props => props.theme.background === '#222222' ? '#fff' : '#fff'};
    color: ${props => props.theme.color === '#fff' ? '#000' : '#000'};
    border-radius: 10px;
`

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const DetailsPokemon = styled.div`
    width: 40%;
    text-align: start;

    h2{         
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(33, 33, 33, 0.8);
        letter-spacing: 2px;
    }

    ul{
        display: flex;
        flex-wrap: wrap;

        li{
            border: 1px solid #000;
            border-radius: 12px;
            padding: 3px 7px;
            margin: 0 5px 5px 0;
            width: fit-content;
            font-size: 14px;
        }
    }
    
`


export const ButtonContainer = styled.div`
    width: 100%;
    text-align: start;

`

export const LoadMoreButton = styled.button`
  border: none;
  border-radius: 10px;
  color: #000;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
`

