import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Inicio from 'pages/inicio';
import Cardapio from 'pages/cardapio';
import Sobre from 'pages/sobre';
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';


export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                    <Routes>
                        <Route path='/' element={<PaginaPadrao/>}>
                            <Route index element={<Inicio />}/>
                            <Route path='cardapio' element={<Cardapio />} />
                            <Route path='sobre' element={<Sobre />} />
                        <Route path='prato/:id' element={<Prato />} />
                        </Route>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}