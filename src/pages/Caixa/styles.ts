import styled from 'styled-components'
import { colors } from '../../styles/stylesGlobal'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
  justify-content: flex-end;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
  display: none;
`
export const GrupoLinhas = styled.div`
  max-width: 360px;
  height: 100vh;
  padding: 0 8px 24px 8px;
  background-color: ${colors.pink};
  h2 {
    font-size: 16px;
    line-height: 18.75px;
    font-weight: bold;
    color: ${colors.white};
    padding-top: 32px;
  }
  p {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${colors.white};
  }
  button {
    display: block;
    color: ${colors.pink};
    background-color: ${colors.white};
    border: none;
    width: 100%;
    margin-top: 24px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  div {
    label {
      display: block;
      color: ${colors.white};
      margin: 8px 0;
    }
    > input {
      width: 100%;
      height: 32px;
      border: none;
      padding: 8px;
    }
  }
`
export const Linhas = styled.div`
  label {
    display: block;
    font-size: 14px;
    margin: 8px 0;
    font-weight: bold;
    line-height: 16.41px;
    color: ${colors.white};
  }
  input {
    width: 100%;
    height: 32px;
    border: none;
    padding: 8px;
  }
`

export const LinhasTwo = styled.div`
  display: flex;
  grid-column-gap: 34px;
  margin-top: 8px;
  label {
    font-size: 14px;
    font-weight: bold;
    line-height: 16.41px;
    color: ${colors.white};
  }
  input {
    margin-top: 8px;
    width: 100%;
    height: 32px;
    border: none;
    padding: 8px;
  }
`

export const GrupoInput = styled.div``
