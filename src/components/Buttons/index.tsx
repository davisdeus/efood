import { Link } from 'react-router-dom'
import { BtnContainer, BtnLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string
}

const Button = ({ type, title, to, onclick, children }: Props) => {
  if (type === 'button') {
    return (
      <BtnContainer type="link" title={title} onClick={onclick}>
        {children}
      </BtnContainer>
    )
  }
  return (
    <BtnLink as={Link} to={to as string} title={title}>
      {children}
    </BtnLink>
  )
}
export default Button
