import { createContext } from "react";

const colors = {
    fire: '#ed8a8b',
    grass: '#49d0b0',
    electric: '#fcc719',
    water: '#76befe',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#c29791',
    psychic: '#eaeda1',
    flying: '#d7ccd7',
    fighting: '#E6E0D4',
    normal: '#d7ccd7'
}

export const PokemonTypeColors = createContext();

export const PokemonTypeColorsProvider = ({children}) => {
    return (
        <PokemonTypeColors.Provider value={colors}>
            {children}
        </PokemonTypeColors.Provider>
    );
}
