import { Opcoes } from '../../pages/Home'
import Cardapio from '../Cardapio'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'Seashell' | 'orange'
  restaurantes: Opcoes[]
}

const CardapioList = ({ title, restaurantes, background }: Props) => {
  const fomatarPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco)
  }

  const getRestauranteTags = (restaurantes: Opcoes) => {
    const tags = []

    if (restaurantes.release_date) {
      tags.push(restaurantes.release_date)
    }
    if (restaurantes.preco) {
      tags.push(`${restaurantes.preco}`)
    }

    if (restaurantes.current) {
      tags.push(fomatarPreco(restaurantes.current))
    }
    return tags
  }

  return (
    <Container background={background}>
      <h2>{title}</h2>
      <List>
        {restaurantes.map((produto) => (
          <Cardapio
            key={produto.id}
            id={produto.id}
            titulo={produto.titulo}
            descricao={produto.descricao}
            infos={getRestauranteTags(produto)}
            nome={produto.nome}
            avaliacao={produto.avaliacao}
            capa={produto.capa}
            tipo={produto.tipo}
          />
        ))}
      </List>
    </Container>
  )
}

export default CardapioList
