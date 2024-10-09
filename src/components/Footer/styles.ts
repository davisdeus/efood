import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'

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
`
export const Redes = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 8px;
  background-color: ${cores.beje};
`
