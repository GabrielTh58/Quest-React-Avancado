import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PokemonMainPage } from '../pages/PokemonMainPage'
import { PokemonDetailPage } from '../pages/PokemonDetailPage/index.jsx'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PokemonMainPage />} />
                <Route exact path='/details/:name' element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}