import logo from '../../assets/emages/logo.png'
import instagram from '../../assets/emages/instagram.png'
import facebook from '../../assets/emages/facebook.png'
import twitter from '../../assets/emages/twitter.png'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <img src={logo} alt="food" />
    <S.Redes>
      <li>
        <img src={instagram} alt="food" />
      </li>
      <li>
        <img src={facebook} alt="food" />
      </li>
      <li>
        <img src={twitter} alt="food" />
      </li>
    </S.Redes>
    <h3>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </h3>
  </S.FooterContainer>
)
export default Footer
