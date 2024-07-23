import styled, { keyframes, css } from 'styled-components';

export const DarkThemeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(23px)
  }
`;

export const LightThemeAnimation = keyframes`
  0% {
    transform: translateX(23px);
  }
  100% {
    transform: translateX(0);
  }
`

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: ' ';
    width: 20px;
    height: 20px;
    background: url(${({ $isDark }) => ($isDark ? '../../src/assets/moon.png' : '../../src/assets/sun.png')});
    background-size: cover;

    @media (max-width: 800px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ToggleButton = styled.button`
  width: 22px;
  height: 17px;
  border-radius: 100%;
  border: none;

  @media (max-width: 800px) {
    width: 20px;  
    height: 16px;
  }

  &:hover {
    cursor: pointer;
  }

  ${({ $isDark }) => 
    css`
      background-color: ${ $isDark ? '#006494' : '#fcc444'};
    `};

  ${({ $isAnimating, $isDark }) =>
    $isAnimating &&
    css`
      animation: ${$isDark ? DarkThemeAnimation : LightThemeAnimation} 0.5s forwards;
    `};

    
`


export const ToggleContainer = styled.div`
  width: 45px;
  height: 18px;
  border-radius: 15px;

  ${({  $isDark }) => 
    css`
      background-color: ${ $isDark ? '#202020' : '#fdff9e'}
  `};
`



