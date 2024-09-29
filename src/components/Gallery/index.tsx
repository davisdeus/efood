import pizza01italiana from '../../assets/emages/italiana/pizza01italiana.png'
import pizza02italiana from '../../assets/emages/italiana/pizza02italiana.jpg'
import pizza03italiana from '../../assets/emages/italiana/pizza03italiana.jpg'
import massa01italiana from '../../assets/emages/italiana/massa01italiana.png'
import massa02italiana from '../../assets/emages/italiana/massa02italiana.jpg'
import massa03italiana from '../../assets/emages/italiana/massa03italiana.jpg'
import close from '../../assets/emages/close.png'
import { ModalDescription } from './styles'

import Section from '../../components/Section'
import {
  Action,
  ImgContainer,
  List,
  ListItem,
  Modal,
  ModalContent,
} from './styles'
import { ButtonAdd } from '../Section/styles'
import { useState } from 'react'

interface GalleryItems {
  type: 'image'
  url: string
}

const mock: GalleryItems[] = [
  {
    type: 'image',
    url: pizza01italiana,
  },
  {
    type: 'image',
    url: pizza02italiana,
  },
  {
    type: 'image',
    url: pizza03italiana,
  },
  {
    type: 'image',
    url: massa01italiana,
  },
  {
    type: 'image',
    url: massa02italiana,
  },
  {
    type: 'image',
    url: massa03italiana,
  },
]

type Props = {
  name: string
}

interface ModalState extends GalleryItems {
  // type: 'image' url: string
  // não é precisso adicionalos pois estão sendo puchados altomaticamente

  isVisible: boolean
}

const Gallery = ({ name }: Props) => {
  const [modal, seModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
  })

  const closeModal = () => {
    seModal({
      isVisible: false,
      type: 'image',
      url: '',
    })
  }

  return (
    <>
      <List className="container">
        {mock.map((media, index) => (
          <ListItem
            key={media.url}
            onClick={() => {
              seModal({
                isVisible: true,
                type: media.type,
                url: media.url,
              })
            }}
          >
            <ImgContainer>
              <Action>
                <p>Clique para ver mais detalhes</p>
              </Action>
              <img src={media.url} alt={`Mídia ${index + 1} do ${name}`} />
            </ImgContainer>
            <Section
              button="Mais detalhes"
              title="Pizza Marguerita"
              background="#E66767"
            >
              <p>
                A clássica Marguerita: molho de tomate suculento, mussarela
                derretida, manjericão fresco e um toque de azeite. Sabor e
                simplicidade! 🍕
              </p>
            </Section>
          </ListItem>
        ))}
      </List>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={modal.url} />
          <ModalDescription>
            <header>
              <h4>{name}</h4>
              <img
                src={close}
                alt="Icone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </header>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br /> <br /> Serve: de 2 a 3 pessoas
            </p>
            <ButtonAdd>Adicionar ao carrinho</ButtonAdd>
          </ModalDescription>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery

{
  /* <ListItem>
  <ImgContainer>
    <img
      src={pizza02italiana}
      alt="Clique para adicionar ao carrinho"
    />
  </ImgContainer>
  <Section
    button="Adicionar ao Carrinho"
    title="Pizza Calabresa"
    background="#E66767"
  >
    <p>
      Calabresa: molho de tomate suculento, mussarela derretida, fatias
      de calabresa, cebola e um toque de orégano. Sabor e simplicidade!
      🍕
    </p>
  </Section>
</ListItem>

<ListItem>
  <ImgContainer>
    <img
      src={pizza03italiana}
      alt="Clique para adicionar ao carrinho"
    />
  </ImgContainer>
  <Section
    button="Adicionar ao Carrinho"
    title="Pizza Quatro Queijos"
    background="#E66767"
  >
    <p>
      Quatro Queijos: molho de tomate suculento, uma combinação
      deliciosa de mussarela, parmesão, gorgonzola e provolone
      derretidos, e um toque de azeite. Sabor e cremosidade! 🍕
    </p>
  </Section>
</ListItem>

<ListItem>
  <ImgContainer>
    <img
      src={massa01italiana}
      alt="Clique para adicionar ao carrinho"
    />
  </ImgContainer>
  <Section
    button="Adicionar ao Carrinho"
    title="Espaguete"
    background="#E66767"
  >
    <p>
      Espaguete com Lula e Camarão: espaguete al dente, lula e camarão
      frescos, molho de tomate suculento, alho, azeite e um toque de
      salsinha. Sabor e simplicidade!
    </p>
  </Section>
</ListItem>

<ListItem>
  <ImgContainer>
    <img
      src={massa02italiana}
      alt="Clique para adicionar ao carrinho"
    />
  </ImgContainer>
  <Section
    button="Adicionar ao Carrinho"
    title="Tortelli Maremmani"
    background="#E66767"
  >
    <p>
      Tortelli Maremmani: ricota fresca, espinafre cozido, parmesão
      ralado, um toque de noz-moscada e pimenta-do-reino. Sabor e
      simplicidade!
    </p>
  </Section>
</ListItem>

<ListItem>
  <ImgContainer>
    <img
      src={massa03italiana}
      alt="Clique para adicionar ao carrinho"
    />
  </ImgContainer>
  <Section
    button="Adicionar ao Carrinho"
    title="Lasanha"
    background="#E66767"
  >
    <p>
      Lasanha: molho de tomate suculento, carne moída bem temperada,
      camadas de massa, ricota cremosa e uma generosa cobertura de
      queijo parmesão gratinado. Sabor e simplicidade!
    </p>
  </Section>
</ListItem> */
}
