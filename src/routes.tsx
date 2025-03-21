import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

const Rotas = () => {
  const handleClose = () => {
    // Lógica para fechar o componente Checkout
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/checkout" element={<Checkout onClose={handleClose} />} />
    </Routes>
  )
}

export default Rotas
