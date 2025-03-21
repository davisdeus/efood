import logo from '../../assets/emages/logo.png'
import { Link } from 'react-router-dom'
import { Restaurante } from '../../pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { abrir } from '../../store/reduces/cart'

import * as S from './styles'
import { HeaderBar2 } from '../../styles/stylesGlobal'

type Props = {
  restaurant: Restaurante
}

export const Header2 = ({ restaurant }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const AbrirCarrinho = () => {
    dispatch(abrir())
  }

  return (
    <>
      <HeaderBar2>
        <div className="containerHeader">
          <Link to="/">Restaurantes</Link>
          <S.Div>
            <img src={logo} alt="efood" />
          </S.Div>
          <S.CartButton onClick={AbrirCarrinho}>
            {items.length} produtos(s) no Carrinho
          </S.CartButton>
        </div>
      </HeaderBar2>

      <S.HeaderImg style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div>
          <h2>{restaurant.tipo}</h2>
          <h2>{restaurant.titulo}</h2>
        </div>
      </S.HeaderImg>
    </>
  )
}
