import logo from '../../assets/emages/logo.png'
import { Div, LinkCart } from './styles'
import carrinho from '../../assets/emages/carrinhoR.png'
import { HeaderBar2 } from '../../styles/stylesGlobal'

export const Header2 = () => (
  <HeaderBar2>
    <div className="contaiberHeader">
      <LinkCart href="/">Restaurantes</LinkCart>
      <Div>
        <img src={logo} alt="food" />
      </Div>
      <LinkCart href="#">
        0 produtos(s) no
        <img src={carrinho} alt="Carrinho" />
      </LinkCart>
    </div>
  </HeaderBar2>
)
