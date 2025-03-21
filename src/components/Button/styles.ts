import styled from 'styled-components'
import { colors } from '../../styles/stylesGlobal'
import { Link } from 'react-router-dom'

export const BtnContainer = styled.button<{ background: 'light' | 'dark' }>`
  background-color: ${(props) =>
    props.background === 'dark' ? colors.beije : colors.pink};
  color: ${(props) =>
    props.background === 'dark' ? colors.pink : colors.beije};
  width: ${(props) => (props.background === 'dark' ? '304px' : '100%')};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  border: none;
`
export const BtnLink = styled(Link)<{ background: 'light' | 'dark' }>`
  width: ${(props) => (props.background === 'dark' ? '100%' : '84px')};
  background-color: ${(props) =>
    props.background === 'dark' ? colors.beije : colors.pink};
  color: ${(props) =>
    props.background === 'dark' ? colors.pink : colors.beije};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  height: 24px;
`
