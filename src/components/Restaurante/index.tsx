import * as S from './styles'
import estrela from '../../assets/emages/estrela.png'
import Tag from '../Tag'

export type Props = {
  titulo: string
  avaliacao: string
  descricao: string
  capa: string
  id: number
  infos: string[]
}

const Restaurante = ({
  titulo,
  avaliacao,
  capa,
  descricao,
  id,
  infos,
}: Props) => (
  <S.CardSection>
    <S.CardImage>
      <img src={capa} alt="Imagem do restaurante" />
      <S.Infos>
        {infos.map((info) => {
          if (info) {
            return (
              <Tag size="big" key={info}>
                {info}
              </Tag>
            )
          }
        })}
      </S.Infos>
    </S.CardImage>

    <S.CardInfos>
      <S.CardHeader>
        <h3>{titulo}</h3>
        <div>
          <h3>{avaliacao}</h3>
          <img src={estrela} alt="Avaliação" />
        </div>
      </S.CardHeader>

      <p>{descricao}</p>
      <S.BtnLink
        title={`Clicque aqui para ver mais detalhes do cardapio.`}
        to={`/product/${id}`}
      >
        Saiba mais
      </S.BtnLink>
    </S.CardInfos>
  </S.CardSection>
)

export default Restaurante
