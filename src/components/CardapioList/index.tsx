import Opcoes from '../../models/Opcoes'
import Cardapio from '../Cardapio'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'pink' | 'orange'
  opcoes: Opcoes[]
  columns: number
}

const CardapioList = ({ title, opcoes, background, columns }: Props) => (
  <Container background={background}>
    <h2>{title}</h2>
    <List columns={columns}>
      {opcoes.map((opcao) => (
        <Cardapio
          key={opcao.id}
          description={opcao.description}
          image={opcao.image}
          title={opcao.title}
          infos={opcao.infos}
          button={opcao.button}
        />
      ))}
    </List>
  </Container>
)

export default CardapioList
