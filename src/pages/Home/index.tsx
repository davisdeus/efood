import { Header } from '../../components/Headers'
import Footer from '../../components/Footer'
import { useGetRestaurantesQuery } from '../../servisces/api'
import RestaurantList from '../../components/RestauranteList'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  destacado: true
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  titulo: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { isLoading, error, data: restaurantes } = useGetRestaurantesQuery()
  if (isLoading) {
    return <h3>Carregando...</h3>
  }

  if (error) {
    return <p>Erro ao carregar a pagina.</p>
  }
  return (
    <>
      <div className="maxContainer">
        <Header />
        <div className="container">
          {restaurantes && <RestaurantList restaurantes={restaurantes} />}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
