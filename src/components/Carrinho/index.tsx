import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { fechar, excluir } from '../../store/reduces/cart'

import { obtertTotalPreco, parseToBrl } from '../../utils'
import * as S from './styles'

const Carrinho = () => {
  const { estaAberto, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fecharCarrinho = () => {
    dispatch(fechar())
  }

  const excluirItem = (id: number) => {
    dispatch(excluir(id))
  }

  const goToCheckout = () => {
    navigate('/caixa')
    fecharCarrinho()
  }

  return (
    <S.CarrinhoContainer className={estaAberto ? 'is-open' : ''}>
      <S.Overlay onClick={fecharCarrinho} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CarrinhoItem key={item.id}>
                  <img src={item.foto} alt="Imagem de um prato" />
                  <div>
                    <h3>{item.nome}</h3>
                    <S.Prices>{parseToBrl(item.preco)}</S.Prices>
                  </div>
                  <button type="button" onClick={() => excluirItem(item.id)} />
                </S.CarrinhoItem>
              ))}
            </ul>
            <S.CarrinhoContaine>
              <div>
                <p>Valor Total</p>
                <p>{parseToBrl(obtertTotalPreco(items))}</p>
              </div>
              <button
                onClick={goToCheckout}
                title="Clique para continuar com a comprar"
                type="button"
              >
                Continuar com a entrega
              </button>
            </S.CarrinhoContaine>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione um produto para continuar com a
            comprar.
          </p>
        )}
      </S.Sidebar>
    </S.CarrinhoContainer>
  )
}
export default Carrinho
