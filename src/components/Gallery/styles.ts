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
export const ListItem = styled.li`
  background-color: ${cores.rosa};
  padding: 8px;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`
