import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/index.js'
import Cadastrar from './pages/cadastrar/index.js'

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cadastrar' element={<Cadastrar/>} />
            </Routes>
        </BrowserRouter>
    )
}