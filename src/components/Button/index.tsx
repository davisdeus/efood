import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  background: 'light' | 'dark'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  background,
  disabled,
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.BtnContainer
        background={background}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.BtnContainer>
    )
  }
  return (
    <S.BtnLink
      background={background}
      type={type}
      to={to as string}
      title={title}
    >
      {children}
    </S.BtnLink>
  )
}
export default Button
