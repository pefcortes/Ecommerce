import React, { type InputHTMLAttributes } from 'react'
// Styles
import { CustomInputContainer } from './custom-input.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ hasError, ...props }, ref) => {
    return <CustomInputContainer $hasError={hasError} {...props} ref={ref} />
  }
)

CustomInput.displayName = 'CustomInput'

export default CustomInput
