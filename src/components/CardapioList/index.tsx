import { Cardapio } from '../../pages/Home'
import CardapioProduto from '../Cardapio'
import * as S from './styles'

export type Props = {
  produtos: Cardapio[]
}

const CardapioList = ({ produtos }: Props) => {
  return (
    <S.ContainerList>
      {produtos.map((produto) => (
        <CardapioProduto
          key={produto.id}
          id={produto.id}
          descricao={produto.descricao}
          foto={produto.foto}
          nome={produto.nome}
          porcao={produto.porcao}
          preco={produto.preco}
        />
      ))}
    </S.ContainerList>
  )
}

export default CardapioList
