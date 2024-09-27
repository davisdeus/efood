import { styled } from 'styled-components'
import { cores } from '../../styles/stylesGlobal'

export const ImgContainer = styled.div`
  position: relative;
  display: block;
  height: 338px;
  width: 100%;
  color: ${cores.branco};

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    content: '';
    background-color: ${cores.preto};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.3;
  }

  h3 {
    z-index: 1;
    position: absolute;
    left: 171px;
    top: 60px;
    font-size: 32px;
  }

  h2 {
    z-index: 1;
    position: absolute;
    left: 171px;
    bottom: 24px;
    font-size: 32px;
  }
`
