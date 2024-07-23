import {
    Container,
    SectionContainer,
    PokemonCard,
    TitleContainer,
    TypeListItem,
    ImageContainer,
    PokemonDetailsContainer,
    InfoContainer,
    DetailsPokemon,
    ButtonContainer,
    LoadMoreButton
} from "./styles.jsx";
import { Menu } from "../../components/menu/index.jsx"
import { ThemeContext } from '../../contexts/ThemeToggler.jsx';
import { useContext, useEffect, useState } from "react";
import { SelectedPokeInfoContext } from "../../contexts/SelectedPokeInfo.jsx";
import { PokemonTypeColors } from "../../contexts/PokeTypeColors";
import axios from 'axios';

export const PokemonDetailPage = () => {
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [visibleMoves, setVisibleMoves] = useState(5);
    const [abilities, setAbilities] = useState([[], []]);

    const { pokemon } = useContext(SelectedPokeInfoContext);
    const typeColors = useContext(PokemonTypeColors);
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const types = pokemon.data.types.map(type => type.type.name);
        const getAbilities = async () => {
            const abilitiesNames = pokemon.data.abilities.map((ability) => ability.ability.name);
            const responseAbilities = await Promise.all(pokemon.data.abilities.map(async (ability) => {
                const response = await axios.get(ability.ability.url);
                if (response.data && response.data.effect_entries) {
                    const descriptionAbilities = response.data.effect_entries.find((entry) => entry.language.name === 'en')?.short_effect;
                    return descriptionAbilities || 'Description not available';
                }
                return 'Description not available';
            }));
            setAbilities([abilitiesNames, responseAbilities]);
        };

        getAbilities()
        setPokemonTypes(types);
    }, [pokemon]);

    const renderTypes = () => (
        <ul>
            {pokemonTypes.map((type, index) => (
                <TypeListItem key={index} style={{ backgroundColor: typeColors[type] || '#FFF' }}>
                    {type}
                </TypeListItem>
            ))}
        </ul>
    );

    const renderAbilities = () => (
        <ul>
            {abilities[0].map((abilityName, index) => (
                <li key={index}>
                    <strong>{abilityName}</strong>: {abilities[1][index]}
                </li>
            ))}
        </ul>
    );

    const renderMoves = () => (
        <ul>
            {pokemon.data.moves.slice(0, visibleMoves).map((move, index) => (
                <li key={index}>{move.move.name}</li>
            ))}
        </ul>
    );

    const handleShowMoreMoves = () => {
        setVisibleMoves(visibleMoves + 5);
    }

    const primaryTypeColor = typeColors[pokemonTypes[0]] || '#ffcaa7';

    return (
        <Container theme={theme}>
            <Menu />

            <SectionContainer>
                <PokemonCard>
                    <div style={{ backgroundColor: primaryTypeColor }}>
                        <TitleContainer>
                            <h1>{`#0${pokemon.data.id} ${pokemon.name}`}</h1>
                            {renderTypes()}
                        </TitleContainer>

                        <ImageContainer>
                            <img src={pokemon.image} alt={pokemon.name} />
                        </ImageContainer>
                    </div>

                    <PokemonDetailsContainer theme={theme}>
                        <InfoContainer>
                            <DetailsPokemon>
                                <h2>Abilities</h2>
                                {renderAbilities()}
                            </DetailsPokemon>
                            
                            <DetailsPokemon>
                                <h2>Moves</h2>
                                {renderMoves()}

                                <ButtonContainer>
                                    <LoadMoreButton onClick={handleShowMoreMoves} style={{ backgroundColor: primaryTypeColor }}>
                                        Mostrar mais...
                                    </LoadMoreButton>
                                </ButtonContainer>
                            </DetailsPokemon>
                        </InfoContainer>
                    </PokemonDetailsContainer>
                </PokemonCard>
            </SectionContainer>
        </Container>

    )
}

