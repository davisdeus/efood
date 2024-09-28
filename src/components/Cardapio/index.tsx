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
  title: string
  description: string
  infos: string[]
  image: string
  button: string
}

const Cardapio = ({ title, description, infos, image, button }: Props) => (
  <CardContainer>
    <Card>
      <img src={image} title={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info} size="big">
            {info}
          </Tag>
        ))}
      </Infos>
      <CardDados>
        <ContainerPontuacao>
          <h3>{title}</h3>
          <ClassificaoPorEstrela>
            <h3>4.9</h3>
            <img src={estrela} />
          </ClassificaoPorEstrela>
        </ContainerPontuacao>
        <Descricao>{description}</Descricao>
        <AddCartButton
          type="link"
          to="/product"
          title="Clique e saiba mais sobre nosso cardapio"
        >
          {button}
        </AddCartButton>
      </CardDados>
    </Card>
  </CardContainer>
)

export default Cardapio
