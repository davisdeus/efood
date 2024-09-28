import bannerImg from '../../assets/emages/italiana/massa01italiana.png'
import { ImgContainer } from './style'

const Hero = () => (
  <ImgContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <h3>Italiana</h3>
    <h2>La Dolce Vita Trattoria</h2>
  </ImgContainer>
)

export default Hero
