import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { fechar, excluir } from '../../store/reduces/cart'
import { formatarPreco } from '../Cardapio'

const Carrinho = () => {
  const { estaAberto, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const fecharCarrinho = () => {
    dispatch(fechar())
  }

  const excluirItem = (id: number) => {
    dispatch(excluir(id))
  }

  const obtertTotalPreco = () => {
    return items.reduce((acumulador, valorATual) => {
      return (acumulador += valorATual.preco)
    }, 0)
  }

  return (
    <S.CarrinhoContainer className={estaAberto ? 'is-open' : ''}>
      <S.Overlay onClick={fecharCarrinho} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CarrinhoItem key={item.id}>
              <img src={item.foto} alt="Imagem de uma pizza" />
              <div>
                <h3>{item.nome}</h3>
                <S.Prices>{formatarPreco(item.preco)}</S.Prices>
              </div>
              <button type="button" onClick={() => excluirItem(item.id)} />
            </S.CarrinhoItem>
          ))}
        </ul>
        <S.CarrinhoContaine>
          <div>
            <p>Valor Total</p>
            <p>{formatarPreco(obtertTotalPreco())}</p>
          </div>
          <button title="Clique para continuar com a comprar" type="button">
            Continuar com a entrega
          </button>
        </S.CarrinhoContaine>
      </S.Sidebar>
    </S.CarrinhoContainer>
  )
}
export default Carrinho
