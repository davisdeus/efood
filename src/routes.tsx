import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Caixa from './pages/Caixa'

const Rotas = () => {
  const handleClose = () => {
    // Lógica para fechar o componente Caixa
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/caixa" element={<Caixa onClose={handleClose} />} />
    </Routes>
  )
}

export default Rotas
