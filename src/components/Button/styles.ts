import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const BtnContainer = styled.button<Props>`
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: ${cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`
export const BtnLink = styled(Link)`
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
`
