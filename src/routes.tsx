import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Italiana from './pages/Italiana'
import Japonesa from './pages/Japonesa'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/japonesa" element={<Japonesa />} />
    <Route path="/italiana" element={<Italiana />} />
  </Routes>
)

export default Rotas
