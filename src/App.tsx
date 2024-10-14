import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/stylesGlobal'

import Rotas from './routes'
import { store } from './store'
import Carrinho from './components/Carrinho'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Carrinho />
      </BrowserRouter>
    </Provider>
  )
}

export default App
