import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/stylesGlobal'

export const HeaderBar = styled.header`
  width: 1366px;
  height: 384px;
  text-align: center;
  padding: 50px 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 50px 0;
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 1200px;
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 530px;
    height: 300px;
    padding-bottom: 300px;
  }

  a {
    color: ${colors.pink};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }

  h2 {
    margin-top: 60px;
    font-size: 18px;
    font-weight: bold;
    color: ${colors.pink};
    padding-bottom: 40px;
  }

  h1 {
    margin-top: 90px;
    font-size: 36px;
    font-weight: bold;
    color: ${colors.pink};
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
export const CartButton = styled.a`
  cursor: pointer;
`

export const HeaderImg = styled.div`
  width: 1366px;
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
      color: ${colors.white};
      z-index: 1;
    }

    h2:nth-child(2) {
      font-weight: 900;
      font-size: 32px;
      line-height: 37.5px;
      color: ${colors.white};
      z-index: 1;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 1200px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 900px;
  }
`
