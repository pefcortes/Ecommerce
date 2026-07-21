import type { ButtonHTMLAttributes } from 'react'
import { CustomButtonContainer, IconContainer } from './custon-button.style'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  startIcon?: React.ReactNode
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
