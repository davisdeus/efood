import CardapioList from '../../components/CardapioList'
import Opcoes from '../../models/Opcoes'
import japonesa01 from '../../assets/emages/japonesa/japonesa01.png'
import italiana01 from '../../assets/emages/italiana/massa01italiana.png'
import brasileira04 from '../../assets/emages/brasileira/brasileiro04.jpg'
import sobremesa from '../../assets/emages/sobremesa/queijoEgoiabada.jpg'
import { Header } from '../../components/Header'

const EmOferta: Opcoes[] = [
  {
    id: 1,
    image: japonesa01,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    button: 'Saiba mais',
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce vita trattoria',
    infos: ['Italiana'],
    image: italiana01,
    button: 'Saiba mais',
  },
  {
    id: 3,
    description:
      'Peça já o melhor da culinária brasileira no conforto da sua casa! Delicie-se com um autêntico vatapá, preparado com ingredientes frescos e temperos tradicionais. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o sabor do Brasil sem sair do lar com nosso delivery!',
    title: 'Vatapá',
    infos: ['Brasileira'],
    image: brasileira04,
    button: 'Saiba mais',
  },
  {
    id: 4,
    description:
      'Peça já as melhores sobremesas brasileiras no conforto da sua casa! Delicie-se com um autêntico brigadeiro, preparado com ingredientes frescos e muito carinho. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o doce sabor do Brasil sem sair do lar com nosso delivery! 🍰🍮',
    title: 'Sobremesas',
    infos: ['Brasileira'],
    image: sobremesa,
    button: 'Saiba mais',
  },
]

const Home = () => (
  <>
    <div className="maxContainer">
      <Header />
      <div className="container">
        <CardapioList
          opcoes={EmOferta}
          title=""
          background="pink"
          columns={2}
        />
      </div>
    </div>
  </>
)

export default Home
