import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'
import TagContainer from '../Tag/styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  display: grid;
  justify-content: center;
`
export const Card = styled.div`
  position: relative;
  margin-top: 10px;
  max-width: 1024px;
  max-height: 1290px;

  img {
    width: 100%;
    height: 200px;
  }
`

export const CardDados = styled.div`
  background-color: ${cores.branco};
  color: ${cores.rosa};
  border: 2px solid ${cores.rosa};
  height: 190px;
  padding: 8px;

  p {
    margin: 8px 0;
  }
`
export const Image = styled.div`
  height: 217px;
  font-weight: bold;
  position: relative;
  margin-top: 60px;

  ${TagContainer} {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`
export const ContainerPontuacao = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;

  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    margin-right: 3px;
  }
`
export const ClassificaoPorEstrela = styled.div`
  display: flex;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const AddCartButton = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  padding: 4px 7px;

  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`
