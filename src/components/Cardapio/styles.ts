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
  width: 472px;
  height: 398px;

  border-left: 2px solid ${cores.rosa};
  border-right: 2px solid ${cores.rosa};
  border-bottom: 2px solid ${cores.rosa};
  background-color: ${cores.branco};
  color: ${cores.rosa};

  img {
    width: 469px;
    height: 217px;
  }
`

export const CardDados = styled.div`
  height: 181px;
  padding: 8px;
  max-height: 1290px;

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
    width: 21px;
    height: 20px;
    margin-top: 8.5px;
  }

  h3 {
    margin-right: 3px;
    padding: 8px 0 16px 8px;
  }
`
export const ClassificaoPorEstrela = styled.div`
  display: flex;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 0 8px 8px;
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
  width: 82px;
  height: 24px;
  margin: 8px;

  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`
