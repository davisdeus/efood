import CardapioList from '../../components/CardapioList'
import Opcoes from '../../models/Opcoes'
import japonesa01 from '../../assets/emages/japonesa/japonesa01.png'
import japonesa02 from '../../assets/emages/japonesa/japonesa02.jpg'
import japonesa03 from '../../assets/emages/japonesa/japonesa03.jpg'
import japonesa04 from '../../assets/emages/japonesa/japonesa04.jpg'
import japonesa05 from '../../assets/emages/japonesa/japonesa05.jpg'
import Banner from '../../components/Banner'
import { Header2 } from '../../components/Header/indexHeader'

const EmOferta: Opcoes[] = [
  {
    id: 6,
    description:
      'Desfrute da culinária japonesa em casa com sushis frescos, sashimis deliciosos e pratos quentes. Entrega rápida e qualidade garantida! 🍣🏠',
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa01,
    button: 'Adicionar ao carrinho',
  },
  {
    id: 7,
    description:
      'Tofu Apimentado, ou Mapo Tofu, é um prato clássico chinês com tofu macio e molho picante. É ideal para quem gosta de sabores intensos e apimentados.',
    title: 'Mapo Tofu',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa02,
    button: 'Adicionar ao carrinho',
  },
  {
    id: 8,
    description:
      'Ramen, originário da China, foi adaptado pelos japoneses e se tornou um dos pratos mais populares do Japão1. Com um caldo saboroso e ingredientes variados, é uma refeição nutritiva e reconfortante.',
    title: 'Ramem',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa03,
    button: 'Adicionar ao carrinho',
  },
  {
    id: 9,
    description:
      'Pato Laqueado, com sua pele crocante e carne suculenta, é um ícone da culinária chinesa. Enquanto aprecia a culinária japonesa em casa, lembre-se das delícias chinesas como este prato tradicional de Pequim.',
    title: 'Pato Laqueado',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa04,
    button: 'Adicionar ao carrinho',
  },
  {
    id: 10,
    description:
      'O Frango General Tso é um prato chinês popular na América do Norte, com frango frito e molho agridoce picante. Enquanto aprecia a culinária japonesa em casa, não esqueça das delícias chinesas como este prato.',
    title: 'Frango General',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa05,
    button: 'Adicionar ao carrinho',
  },
]

const Japonesa = () => (
  <>
    <div className="maxContainer">
      <Header2 />
      <Banner />
      <div className="container">
        <CardapioList
          opcoes={EmOferta}
          title=""
          background="pink"
          columns={3}
        />
      </div>
    </div>
  </>
)

export default Japonesa
