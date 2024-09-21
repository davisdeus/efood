import logo from '../../assets/emages/logo.png'
import { HeaderBar } from './styles'

export const Header = () => (
  <HeaderBar>
    <div className="contaiberHeader">
      <img src={logo} alt="food" />
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </div>
  </HeaderBar>
)
