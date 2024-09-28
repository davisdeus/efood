import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'

interface ContainerProps {
  background: string
}

export const Container = styled.section<ContainerProps>`
  background: ${(props) => props.background};

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.beje};
    line-height: 22px;
  }
`
export const Title = styled.h2`
  margin-bottom: 8px;
  color: ${cores.beje};
  font-size: 18px;
  font-weight: bold;
`

export const ButtonAdd = styled.button`
  margin: 8px 0;
  background-color: ${cores.beje};
  color: ${cores.rosa};
  width: 304px;
  height: 24px;

  text-align: center;
  width: 100%;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
