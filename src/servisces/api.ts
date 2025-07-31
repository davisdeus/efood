import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type Produto = {
  id: number
  price: number
}

type ComprarProduto = {
  produtos: Produto[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
    payment: {
      card: {
        name: string
        number: string
        code: number
        expires: {
          month: number
          year: number
        }
      }
    }
  }
}

type RespostaCompra = {
  idPedido: string
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
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body: body,
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
