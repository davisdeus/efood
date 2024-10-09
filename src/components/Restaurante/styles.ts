import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'
import { Link } from 'react-router-dom'

export const CardSection = styled.section`
  border: 1px solid ${cores.rosa};
  max-width: 472px;
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  background-color: ${cores.branco};
  position: relative;
`

export const CardImage = styled.div`
  width: 100%;
  max-width: 472px;
  height: 250px;
  overflow-y: hidden;

  img {
    width: 100%;
    display: block;
    height: 217px;
  }
`

export const CardHeader = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    h3 {
      margin-right: 8px;
    }
  }
`

export const CardInfos = styled.div`
  padding: 8px;
  width: 472px;
  height: 181px;

  p {
    margin: 16px 0;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const BtnLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  text-decoration: none;
  padding: 4px 6px;
  font-weight: bold;
  padding: 4px 8px;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  margin-top: 16px;
  margin-bottom: 8px;
`
