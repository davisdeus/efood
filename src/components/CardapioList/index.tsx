import { Cardapio } from '../../pages/Home'
import CardapioProduto from '../Cardapio'
import { ContainerList } from './styles'

export type Props = {
  produtos: Cardapio[]
}

const CardapioList = ({ produtos }: Props) => {
  return (
    <ContainerList>
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
    </ContainerList>
  )
}

export default CardapioList
