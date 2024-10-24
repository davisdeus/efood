import styled from 'styled-components'
import { breakpoints } from '../../styles/stylesGlobal'

export const ContainerList = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 56px auto 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 170px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 50px;
    margin-left: 145px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`
