import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type RespostaCompra = {
  idPedido: string
}
type Produto = {
  id: number
  preco: number
}

type ComprarProduto = {
  produtos: Produto[]
  entrega: {
    receptor: string
    endereco: {
      descricao: string
      cidade: string
      cep: string
      numero: number
      complemento?: string
    }
  }
  pagamento: {
    cartao: {
      nome: string
      numero: number
      codigo: number
      experira: {
        mes: number
        ano: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestauranteSelected: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
    }),
    compra: builder.mutation<RespostaCompra, ComprarProduto>({
      query: (corpo) => ({
        url: 'checkout',
        method: 'POST',
        corpo,
      }),
    }),
  }),
})

export const {
  useGetRestauranteSelectedQuery,
  useGetRestaurantesQuery,
  useCompraMutation,
} = api

export default api
