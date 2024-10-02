import { useEffect, useState } from 'react'

import CardapioList from '../../components/CardapioList'
import { Header } from '../../components/Header'

export interface GalleryItems {
  type: 'image'
  url: string
}

export interface Opcoes extends GalleryItems {
  release_date?: string
  current?: number
  id: number
  destacado: true
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  button: string
  infos: string[]
  titulo: string
  restaurantes: GalleryItems[]

  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [emOferta, setEmOferta] = useState<Opcoes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resp) => resp.json())
      .then((resp) => setEmOferta(resp))
  })

  return (
    <>
      <div className="maxContainer">
        <Header />
        <div className="container">
          <CardapioList
            restaurantes={emOferta}
            title=""
            background="Seashell"
          />
        </div>
      </div>
    </>
  )
}

export default Home
