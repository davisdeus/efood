class Opcoes {
  title: string
  infos: string[]
  description: string
  image: string
  button: string
  id: number

  constructor(
    id: number,
    title: string,
    infos: string[],
    description: string,
    image: string,
    button: string,
  ) {
    this.id = id
    this.title = title
    this.infos = infos
    this.description = description
    this.image = image
    this.button = button
  }
}
export default Opcoes
