import styled from 'styled-components'

interface ContainerProps {
  background: string
}

export const Container = styled.section<ContainerProps>`
  background: ${(props) => props.background};
  padding: 20px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`
