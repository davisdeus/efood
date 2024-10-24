import logo from '../../assets/emages/logo.png'
import img from '../../assets/emages/Vector.png'
import { HeaderBar } from './styles'

export const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${img})` }}>
    <div className="containerHeader">
      <img src={logo} alt="efood" />
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </div>
  </HeaderBar>
)
