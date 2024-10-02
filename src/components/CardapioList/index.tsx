import { Opcoes } from '../../pages/Home'
import Cardapio from '../Cardapio'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'Seashell' | 'orange'
  restaurantes: Opcoes[]
}

export const fomatarPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
}

const CardapioList = ({ title, restaurantes, background }: Props) => {
  const getRestauranteTags = (restaurantes: Opcoes) => {
    const tags = []

    if (restaurantes.release_date) {
      tags.push(restaurantes.release_date)
    }
    if (restaurantes.cardapio.preco) {
      tags.push(`${restaurantes.cardapio.preco}`)
    }

    if (restaurantes.current) {
      tags.push(fomatarPreco(restaurantes.cardapio.preco))
    }
    return tags
  }

  return (
    <Container background={background}>
      <h2>{title}</h2>
      <List>
        {restaurantes.map((produto) => (
          <li key={produto.id}>
            <Cardapio
              id={produto.id}
              titulo={produto.titulo}
              descricao={produto.descricao}
              infos={getRestauranteTags(produto)}
              nome={produto.cardapio.nome}
              avaliacao={produto.avaliacao}
              capa={produto.capa}
              tipo={produto.tipo}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}

export default CardapioList
