import logo from '../../assets/emages/logo.png'
import instagram from '../../assets/emages/footer/instagram.png'
import facebook from '../../assets/emages/footer/facebook.png'
import twitter from '../../assets/emages/footer/twitter.png'
import { FooterContainer, Redes } from './styles'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="food" />
    <Redes>
      <li>
        <img src={instagram} alt="food" />
      </li>
      <li>
        <img src={facebook} alt="food" />
      </li>
      <li>
        <img src={twitter} alt="food" />
      </li>
    </Redes>
    <h3>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </h3>
  </FooterContainer>
)
export default Footer
