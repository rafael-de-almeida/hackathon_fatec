import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { CrudSimples } from './pages/CrudSimples/CrudSimples'
import { Avaliacao } from './pages/Avaliacao/Avaliacao';
import { Analise } from './pages/Analise/Analise';
import { Testes } from './pages/Testes/Testes';
import { ProcessoSeletivo } from './pages/ProcessoSeletivo/ProcessoSeletivo';
import  CriarAvaliacao  from './pages/CriarAvaliacao/CriarAvaliacao';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criarAvaliacao" element={<CriarAvaliacao/>} />
        <Route path='/avaliacao' element={<Avaliacao/>} />
        <Route path='/analise' element={<Analise />} />
        <Route path="/processoSeletivo" element={<ProcessoSeletivo/>} />
        
        <Route path="/testes" element={<Testes/>} />
        <Route path="/crudSimples" element={<CrudSimples />} />
      </Routes>
    </Router>
  )
}

export default App
