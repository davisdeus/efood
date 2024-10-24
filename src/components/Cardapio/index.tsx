import { CardCardapio, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { abrir, addicionar } from '../../store/reduces/cart'
import fechar from '../../assets/emages/close.png'
import Button from '../Button'

type Props = {
  id: number
  descricao: string
  nome: string
  preco: number
  porcao: string
  foto: string
}

export const formatarPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
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
      <CardCardapio>
        <img src={foto} alt="foto do restaurante" />
        <h2>{nome}</h2>
        <p>{getDescricao(descricao)}</p>
        <button onClick={() => setIsVisible(true)}>Adicione ao carrinho</button>
      </CardCardapio>

      <Modal className={mostrarModal()}>
        <ModalContent>
          <div>
            <img src={foto} alt="Imagem do prato" />
            <div>
              <div>
                <h2>{nome}</h2>
                <img
                  src={fechar}
                  onClick={() => setIsVisible(false)}
                  alt="Clique para fechar"
                />
              </div>
              <p>{descricao}</p>
              <p>Porção: {porcao}</p>
              <Button
                onClick={adicionarCarrinho}
                type="button"
                title="Adicionar ao carrinho"
              >
                Adicionar ao carrinho - {formatarPreco(preco)}
              </Button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default CardapioProduto
