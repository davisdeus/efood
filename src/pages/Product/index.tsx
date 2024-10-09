import { useParams } from 'react-router-dom'
import { Header2 } from '../../components/Headers/indexHeader'
import Hero from '../../components/Hero'
import CardapioList from '../../components/CardapioList'
import Footer from '../../components/Footer'
import { useGetRestauranteSelectedQuery } from '../../servisces/api'

const Product = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestauranteSelectedQuery(id!)

  if (!restaurant) {
    return <h4>Caregando...</h4>
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
