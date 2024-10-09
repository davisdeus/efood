import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'

export const HeaderBar = styled.header`
  width: 1366px;
  height: 384px;
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

export const HeaderImg = styled.div`
  height: 280px;
  padding: 24px 170px 32px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  &::after {
    position: absolute;
    width: 100%;
    height: 280px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  div {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2:first-child {
      font-weight: 100;
      font-size: 32px;
      line-height: 37.5px;
      color: ${cores.branco};
      z-index: 1;
    }

    h2:nth-child(2) {
      font-weight: 900;
      font-size: 32px;
      line-height: 37.5px;
      color: ${cores.branco};
      z-index: 1;
    }
  }
`
