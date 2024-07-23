import { Link } from "react-router-dom"
import { ThemeToggler } from '../../components/theme-toggler/themeToggler'
import { MenuContainer, ThemeContainer, LogoContainer, PokeballContainer } from "./styles"
export const Menu = () => {
    return (
        <MenuContainer>
            <LogoContainer>
                <PokeballContainer>
                    <Link to="/">
                        <img src="../../src/assets/logo-pokemon.png" alt="logo pokemon" />
                        <img src="../../src/assets/pokebola-icon.png" alt="Pokebola Icon" />
                    </Link>
                </PokeballContainer>
            </LogoContainer>

            <ThemeContainer>
                <ThemeToggler />
            </ThemeContainer>
        </MenuContainer>
    )
}