import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import { abrir, addicionar } from '../../store/reduces/cart'
import closeIcon from '../../assets/emages/close.png'

import * as S from './styles'
import { parseToBrl } from '../../utils'

type Props = {
  id: number
  descricao: string
  nome: string
  preco: number
  porcao: string
  foto: string
}

const CardapioProduto = ({
  id,
  descricao,
  nome,
  preco,
  foto,
  porcao,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()

  const mostrarModal = () => {
    if (isVisible) {
      return 'isVisible'
    }
    return ''
  }
  const adicionarCarrinho = () => {
    const cardapio = { id, descricao, nome, preco, foto, porcao }
    dispatch(addicionar(cardapio))
    dispatch(abrir())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.CardCardapio>
        <img src={foto} alt="foto do restaurante" />
        <h2>{nome}</h2>
        <p>{getDescricao(descricao)}</p>
        <button onClick={() => setIsVisible(true)}>Adicione ao carrinho</button>
      </S.CardCardapio>

      <S.Modal className={mostrarModal()}>
        <S.ModalContent>
          <div>
            <img src={foto} alt="Imagem do prato" />
            <div>
              <div>
                <h2>{nome}</h2>
                <img
                  src={closeIcon}
                  onClick={() => setIsVisible(false)}
                  alt="Clique para fechar"
                  title="Clique para fechar"
                />
              </div>
              <p>{descricao}</p>
              <p>Porção: {porcao}</p>
              <Button
                background="light"
                onClick={adicionarCarrinho}
                type="button"
                title="Adicionar ao carrinho"
              >
                Adicionar ao carrinho - {parseToBrl(preco)}
              </Button>
            </div>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </S.Modal>
    </>
  )
}

export default CardapioProduto
