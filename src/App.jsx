import './App.css';
import { SelectedPokeInfoProvider } from './contexts/SelectedPokeInfo';
import { PokemonTypeColorsProvider } from './contexts/PokeTypeColors';
import { ThemeProvider } from './contexts/ThemeToggler';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ThemeProvider>
      <SelectedPokeInfoProvider>
        <PokemonTypeColorsProvider>
          <AppRoutes />
        </PokemonTypeColorsProvider>
      </SelectedPokeInfoProvider>
    </ThemeProvider>
  );
}

export default App;
