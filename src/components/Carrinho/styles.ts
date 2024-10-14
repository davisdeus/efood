import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'
import lixeira from '../../assets/emages/lixeira-de-reciclagem 1.png'

export const CarrinhoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
`
export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 344px;
  width: 100%;
`
export const CarrinhoItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px 0;
  background-color: ${cores.Seashell};
  height: 100px;
  color: ${cores.rosa};
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 4px 8px 12px 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    line-height: 21.09px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 76px;
    right: 8px;
    cursor: pointer;
  }
`
export const Prices = styled.p`
  font-size: 14px;
  font-weight: 400;
`
