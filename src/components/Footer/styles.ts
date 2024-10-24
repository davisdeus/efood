import styled from 'styled-components'
import { breakpoints, cores } from '../../styles/stylesGlobal'

export const FooterContainer = styled.div`
  max-width: 1366px;
  height: 298px;
  text-align: center;
  background-color: ${cores.beje};
  width: 100%;
  margin: 0 auto;
  margin-top: auto;

  h3 {
    font-size: 10px;
    color: ${cores.rosa};
  }

  img {
    margin: 40px 0 32px 0;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 1366px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 1200px;
    h3 {
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 900px;
  }
`
export const Redes = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 8px;
  background-color: ${cores.beje};

  @media (max-width: ${breakpoints.desktop}) {
  }
`
