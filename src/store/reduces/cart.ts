import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  items: Cardapio[]
  estaAberto: boolean
  estaPago: boolean
}
const initialState: CartState = {
  items: [],
  estaAberto: false,
  estaPago: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addicionar: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload)
    },
    abrir: (state) => {
      state.estaAberto = true
    },
    fechar: (state) => {
      state.estaAberto = false
    },
    excluir: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addicionar, abrir, fechar, excluir } = cartSlice.actions

export default cartSlice.reducer
