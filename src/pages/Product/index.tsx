import { useParams } from 'react-router-dom'
import { Header2 } from '../../components/Headers/indexHeader'
import CardapioList from '../../components/CardapioList'
import Footer from '../../components/Footer'
import { useGetRestauranteSelectedQuery } from '../../servisces/api'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}
const Product = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetRestauranteSelectedQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <div className="maxContainer">
        <Header2 restaurant={restaurant} />
        <div className="container">
          <CardapioList produtos={restaurant.cardapio} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Product
