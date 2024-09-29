import Gallery from '../../components/Gallery'
import { Header2 } from '../../components/Header/indexHeader'
import Hero from '../../components/Hero'

const Product = () => (
  <>
    <div className="maxContainer">
      <Header2 />
      <Hero />
      <Gallery name="Pizza Marguerita" />
    </div>
  </>
)

export default Product
