import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'

export const HeaderBar = styled.header`
  width: 1366px;
  background-color: ${cores.beje};
  text-align: center;
  padding: 50px 0;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }

  h2 {
    margin-top: 60px;
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rosa};
    padding-bottom: 40px;
  }

  h1 {
    margin-top: 90px;
    font-size: 36px;
    font-weight: bold;
    color: ${cores.rosa};
    line-height: 42.19px;
    padding-bottom: 40px;
  }
`

export const Div = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;

  img {
    width: 125px;
    height: 58px;
    margin: 50px 0;
  }
`
export const LinkCart = styled.a``
