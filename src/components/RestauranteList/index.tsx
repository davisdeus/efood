import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurante'
import * as S from './styles'

export type Props = {
  restaurantes: Restaurante[]
  isLoading: boolean
}

const RestaurantList = ({ restaurantes }: Props) => {
  const getRestauranteTags = (restaurante: Restaurante) => {
    const tags = []
    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }
    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }
    return tags
  }

  return (
    <S.List>
      {restaurantes.map((restaurante) => (
        <Restaurant
          key={restaurante.id}
          id={restaurante.id}
          capa={restaurante.capa}
          titulo={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          descricao={restaurante.descricao}
          infos={getRestauranteTags(restaurante)}
        />
      ))}
    </S.List>
  )
}

export default RestaurantList
