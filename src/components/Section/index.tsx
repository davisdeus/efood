import { ButtonAdd, Container, Title } from './styles'

export type Props = {
  button: string
  title: string
  background: '#E66767'
  children: JSX.Element
}

const Section = ({ title, background, children, button }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
    <ButtonAdd>{button}</ButtonAdd>
  </Container>
)

export default Section
