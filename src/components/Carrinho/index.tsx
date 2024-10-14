import massa01italiana from '../../assets/emages/italiana/massa01italiana.png'
import * as S from './styles'

const Carrinho = () => {
  return (
    <S.CarrinhoContainer>
      <S.Overlay />
      <S.Sidebar>
        <ul>
          <S.CarrinhoItem>
            <img src={massa01italiana} alt="Imagem de uma pizza" />
            <div>
              <h3>Nome Do Proto</h3>
              <S.Prices>R$ 60,00</S.Prices>
            </div>
            <button type="button" />
          </S.CarrinhoItem>

          <S.CarrinhoItem>
            <img src={massa01italiana} alt="Imagem de uma pizza" />
            <div>
              <h3>Nome Do Proto</h3>
              <p>R$ 60,00</p>
            </div>
            <button type="button" />
          </S.CarrinhoItem>
        </ul>
      </S.Sidebar>
    </S.CarrinhoContainer>
  )
}
export default Carrinho
