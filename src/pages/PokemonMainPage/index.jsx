import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    Filter,
    PageContainer,
    ContentContainer,
    PokemonListContainer,
    ImageContainer,
    PokemonList,
    PokemonId,
    PokemonName,
    ButtonContainer,
    LoadMorePokemonButton
} from './styles';
import { SelectedPokeInfoContext } from '../../contexts/SelectedPokeInfo';
import { PokemonTypeColors } from "../../contexts/PokeTypeColors";
import { ThemeContext } from '../../contexts/ThemeToggler';
import { Menu } from '../../components/menu';

async function fetchPokemons(offset) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
        return response.data.results;
    } catch (error) {
        console.log(`Error fetching Pokemon: ${error}`);
    }
}

export const PokemonMainPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [filter, setFilter] = useState("all");

    const { setPokemon: setSelectedPokemon } = useContext(SelectedPokeInfoContext);
    const typeColors = useContext(PokemonTypeColors);
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        let isMounted = true;
        const fetchPokemonData = async () => {
            const pokemonData = await fetchPokemons(offset);
            const pokemonWithImages = await Promise.all(
                pokemonData.map(async (poke) => {
                    const pokemonDetails = await axios.get(poke.url);
                    const image = pokemonDetails.data.sprites.front_default;
                    const types = pokemonDetails.data.types.map(type => type.type.name);
                    return { ...poke, image, types, data: pokemonDetails.data };
                })
            );
            if (isMounted) {
                setPokemons((prevPokemons) => [...prevPokemons, ...pokemonWithImages]);
            }
        };
        fetchPokemonData();
        return () => {
            isMounted = false;
        };
    }, [offset]);

    const loadMorePokemons = () => {
        setOffset((prevOffset) => prevOffset + 10);
    };

    const handlePokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const types = Object.keys(typeColors)

    const filteredPokemons = filter === "all" ? pokemons : pokemons.filter(pokemon => pokemon.types.includes(filter))

    return (
        <PageContainer theme={theme}>
            <Menu />
            
            <ContentContainer>
                <Filter>
                    <div>
                        <span>Filter: </span>
                        <select name="Filter by type" onChange={handleFilterChange} value={filter}>
                            <option value="all">all</option>
                            {types.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </Filter>
                <PokemonListContainer>
                    <div>
                        <ul>
                            {filteredPokemons.map((pokemon, index) => {
                                const primaryTypeColor = typeColors[pokemon.types[0]] || '#ffcaa7';
                                return (
                                    <PokemonList key={index} $typeColor={primaryTypeColor} theme={theme}>
                                        <Link to={`/details/${pokemon.name}`} onClick={() => handlePokemonClick(pokemon)}>
                                            <PokemonId>{`#0${pokemon.data.id}`}</PokemonId>
                                            <ImageContainer>
                                                <img src={pokemon.image} alt={`image of ${pokemon.name}`} />
                                            </ImageContainer>
                                            <div>
                                                <PokemonName theme={theme}>{pokemon.name}</PokemonName>
                                            </div>
                                        </Link>
                                    </PokemonList>
                                );
                            })}
                        </ul>
                    </div>

                    <ButtonContainer>
                        <LoadMorePokemonButton onClick={loadMorePokemons}>
                            Carregar mais
                            <img src="../../src/assets/pokebola-icon.png" alt="Pokebola Icon" />
                        </LoadMorePokemonButton>
                    </ButtonContainer>
                </PokemonListContainer>
            </ContentContainer>
        </PageContainer>
    );
};

