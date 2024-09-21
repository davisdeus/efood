import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const BtnContainer = styled.button<Props>`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
`
export const BtnLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
