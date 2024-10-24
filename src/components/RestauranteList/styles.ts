import styled from 'styled-components'
import { breakpoints } from '../../styles/stylesGlobal'

export const List = styled.div`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 130px;
    row-gap: 70px;
    margin: 60px 0;
    margin-left: 145px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    column-gap: 80px;
    row-gap: 70px;
    margin-left: 92px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    margin-left: 30px;
  }
`
