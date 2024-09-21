import styled from 'styled-components'

interface ContainerProps {
  background: string
}

export const Container = styled.section<ContainerProps>`
  background: ${(props) => props.background};
  padding: 20px;
`

export const List = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 10px;
`
