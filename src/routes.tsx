import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Italiana from './pages/Italiana'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italiana" element={<Italiana />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
