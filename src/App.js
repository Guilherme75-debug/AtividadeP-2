import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';'./App.css';

import Footer from './Componentes/Footer/index.js';
import Header from './Componentes/Header/index.js';
import Home from './Componentes/Home/index.js';

import Projetos from './Componentes/Projetos/index.js';
import Servicos from './Componentes/Servicos/index.js';
import Contato from './Componentes/Contato/index.js';
import DetalhesServico from './Componentes/Servicos/DetalhesServico.js';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' element={<Projetos />} />
            <Route path='/servicos' element={<Servicos />} />
            <Route path='/contatos' element={<Contato />} />
            <Route path="/detalheServico/:id" element={<DetalhesServico />} />
          </Routes>
        </BrowserRouter>
        <Home />
        <Footer />
    </>
  );
}

export default App;
