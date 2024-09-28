import pizza01italiana from '../../assets/emages/italiana/pizza01italiana.png'
import pizza02italiana from '../../assets/emages/italiana/pizza02italiana.jpg'
import pizza03italiana from '../../assets/emages/italiana/pizza03italiana.jpg'
import massa01italiana from '../../assets/emages/italiana/massa01italiana.png'
import massa02italiana from '../../assets/emages/italiana/massa02italiana.jpg'
import massa03italiana from '../../assets/emages/italiana/massa03italiana.jpg'

import Section from '../../components/Section'
import { ImgContainer, List, ListItem } from './styles'

const Gallery = () => {
  return (
    <>
      <List className="container">
        <ListItem>
          <ImgContainer>
            <img
              src={pizza01italiana}
              alt="Clique para adicionar ao carrinho"
            />
          </ImgContainer>
          <Section
            button="Adicionar ao Carrinho"
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

        <ListItem>
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
        </ListItem>
      </List>
    </>
  )
}

export default Gallery
