import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/stylesGlobal'

export const CardCardapio = styled.div`
  width: 320px;
  height: 325px;
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.beije};
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 420px;
    height: 305px;
  }

  img {
    height: 170px;
    object-fit: cover;
  }

  h2 {
    margin: 8px 0;
    font-weight: 900;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
    color: ${colors.beije};
  }

  button {
    color: ${colors.beije};
    background-color: ${colors.beije};
    color: ${colors.pink};
    border: none;
    font-size: 14px;
    font-weight: 700;
    padding-top: 4px;
    padding-bottom: 4px;
    line-height: 16px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 550px;
    margin-left: 43px;
  }
`

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.isVisible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 1024px;
  height: 490px;
  margin-top: 490px;
  z-index: 1;
  margin-bottom: 300px;

  > div {
    display: flex;
    padding: 32px;
    background-color: ${colors.pink};
    color: ${colors.beije};

    > img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    div {
      display: block;

      div {
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 21px;
          font-weight: 900;
          margin-left: 24px;
        }

        img {
          height: 16px;
          width: 16px;
          cursor: pointer;
        }
      }

      p {
        margin: 16px 0 20px 24px;
        font-size: 14px;
      }

      button {
        border: none;
        padding: 4px 2px;
        font-size: 14px;
        font-weight: 700;
        background-color: ${colors.beije};
        color: ${colors.pink};
        margin-left: 24px;
        border-radius: 8px;
        width: 33%;
      }
    }
  }
`
export const List = styled.ul`
  padding: px;
`
