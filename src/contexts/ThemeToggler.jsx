import { createContext } from "react";
import { useState } from "react";

export const  ThemeContext = createContext({});

export const themes = {
    light: {
        color: '#000000',
        background: 'linear-gradient(to right, #d4d3dd, #efefbb)',
    },
    dark: {
        color: '#ffffff',
        background: '#222222',
    },
};

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
