import { createContext, useState } from "react";

export const SelectedPokeInfoContext = createContext();

export const SelectedPokeInfoProvider = ({children}) => {  
    const [selectedPokemon, setSelectedPokemon] = useState();

    const value = {
        pokemon: selectedPokemon,
        setPokemon: setSelectedPokemon,
    }

    return (
        <SelectedPokeInfoContext.Provider value={value}>
            {children}
        </SelectedPokeInfoContext.Provider>
    );
};
