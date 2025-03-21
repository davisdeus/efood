import styled from 'styled-components'
import { colors } from '../../styles/stylesGlobal'
import { Props } from '.'

const TagContainer = styled.div<Props>`
  background-color: ${colors.pink};
  color: ${colors.lightpink};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  align-items: center;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
`
export default TagContainer
