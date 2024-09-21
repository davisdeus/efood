import styled from 'styled-components'
import { cores } from '../../styles/stylesGlobal'
import { Props } from '.'

const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  align-items: center;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
`
export default TagContainer
