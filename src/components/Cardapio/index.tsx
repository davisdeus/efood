import {
  AddCartButton,
  Card,
  CardContainer,
  CardDados,
  ClassificaoPorEstrela,
  ContainerPontuacao,
  Descricao,
  Infos,
} from './styles'
import estrela from '../../assets/emages/estrela.png'
import Tag from '../Tag'

type Props = {
  id: number
  avaliacao: string
  descricao: string
  capa: string
  nome: string
  infos: string[]
  titulo: string
  tipo: string
}

const Cardapio = ({
  id,
  avaliacao,
  descricao,
  capa,
  infos,
  titulo,
  tipo,
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  return (
    <CardContainer>
      <Card>
        <img src={capa} alt="foto do restaurante" />
        <Infos>
          <Tag size="big">{tipo}</Tag>
        </Infos>

        <ContainerPontuacao>
          <h3>{titulo}</h3>
          <ClassificaoPorEstrela>
            <h3>{avaliacao}</h3>
            <img src={estrela} />
          </ClassificaoPorEstrela>
        </ContainerPontuacao>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <AddCartButton
          type="link"
          to={`/product/${id}`}
          title="Clique e saiba mais sobre nosso cardapio"
        >
          Saiba mais
        </AddCartButton>
      </Card>
    </CardContainer>
  )
}

export default Cardapio
