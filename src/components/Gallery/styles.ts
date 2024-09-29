import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'

export const ImgContainer = styled.div`
  margin-bottom: 8px;
  color: ${cores.beje};
  font-size: 18px;
  font-weight: bold;

  img {
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px;
  gap: 32px;
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;
`
export const ListItem = styled.li`
  position: relative;
  background-color: ${cores.rosa};
  padding: 8px;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
      cursor: pointer;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: grid;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosa};
  color: ${cores.beje};
  display: flex;
  gap: 24px;
  padding: 32px;

  header {
    display: flex;
    justify-content: space-between;

    h4 {
      color: ${cores.branco};
      margin-bottom: 16px;
    }

    img {
      width: 16px;
      height: 16px;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
`

export const ModalDescription = styled.div`
  display: block;

  button {
    width: 218px;
    height: 24px;
  }
`
