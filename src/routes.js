import Footer from 'components/footer';
import Menu from 'components/menu';
import Padrao from 'components/paginaPadrao';
import Error404 from 'pages/404';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import Prato from 'pages/prato';
import Sobre from 'pages/sobre';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter(){
    return(
        <main className='container'>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Padrao/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<Cardapio/>} />
                        <Route path='sobre' element={<Sobre/>}/>
                    </Route>
                    <Route path='prato/:id' element={<Prato/>}/>
                    <Route path='*' element={<Error404/>}/>
                </Routes>
                <Footer/>        
            </Router>
        </main>
    );
}